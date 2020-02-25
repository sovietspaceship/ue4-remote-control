function extractSignatures() {

    const signatures = extractSignatures()

    const types = {}

    const schemas = []
    const methods = []

    for (const signature of signatures) {
        compile(signature)
    }
    const collectedTypes = declareAllTypes(types)
    const generatedFile = [
        collectedTypes,
        schemas.join('\n'),
        methods.join('\n')
    ].join('\n-------\n')
    return generatedFile

    function extractSignatures() {
        const functionList = document.querySelector('div#functions_0 > div.member-list > table > tbody')
        return Array.from(functionList.children).slice(1).map(tr => Array.from(tr.children)).map(columns => {
            const [returnValueCol, nameAndParamsCol] = columns.slice(1)
            const returnValue = returnValueCol.querySelector('span > p').textContent.trim()
            const name = nameAndParamsCol.querySelector('a').textContent.replace('()', '').trim()
            const params = nameAndParamsCol.querySelector('div.name-cell-arguments').innerText.trim()
            return { returnValue: returnValue, name, parameters: params }
        })
    }

    function parseType(type) {
        let parsedType = type.replace(/\s*(const|class)\s+/, '').replace(/[&\*]/g, '').replace(/\s*([<>])\s*/g, '$1').replace(/\s+/g, ' ').replace(/class /g, '').trim()
        let schema = parsedType
        const arrayMatch = parsedType.match(/TArray<\s*(.+)>/)
        let isArray = false
        if (arrayMatch) {
            parsedType = arrayMatch[1].replace(/class /g, '')
            schema = parsedType
            isArray = true
        }
        const uclassMatch = parsedType.match(/TSubclassOf<\s*([^>]+)>/)
        if (uclassMatch) {
            className = uclassMatch[1].trim()
            schema = `TSubclassOf<${className}>`
        }
        if (schema === 'bool') {
            schema = 'boolean'
        }
        let rschema = ['U', 'A'].includes(schema[0]) ? `UObjectRef<${schema}>` : schema
        types[parsedType] = true
        if (isArray) {
            schema += '[]'
            rschema += '[]'
        }
        return { schema, rschema }
    }

    function parseParams(params) {
        return params === '' ? [] : params.split('\n').slice(1).filter(l => !/\)$/.test(l)).map(parseParameter)
    }

    function parseParameter(variable) {
        const parts = variable.replace(/,$/, '').split(' ').reverse()
        const [name, ...type] = parts
        const isOutParam = /^Out/.test(name)
        return { name, type: parseType(type.reverse().join(' ').replace(/\s+/g, ' ')), isOutParam }
    }

    function compile(func) {
        const returnType = parseType(func.returnValue)
        const compiledParams = parseParams(func.parameters)

        return buildTSFunction(returnType, func.name, compiledParams)
    }

    function makeSchema(name, types) {
        const paramProps = types.map(param => `${param.name}: ${param.type.rschema}`).join(',\n    ')
        return `type ${name} = {
    ${paramProps}
}`
    }

    function declareAllTypes(types) {
        let out = ''
        types = Object.keys(types).sort((a, b) => a.replace(/^A/, 'U').localeCompare(b))
        for (const type of types) {
            if (['UObject', 'AActor', 'UClass'].includes(type)) { continue }
            const typeType = type[0]
            switch (typeType) {
                case 'U': {
                    out += `
export class ${type} extends UObject {
    
}
`
                    break
                }
                case 'A': {
                    out += `
export class ${type} extends AActor {
    
}
`
                    break
                }
                case 'F': {
                    out += `
export type ${type} = {
    
}
`
                    break
                }
                case 'E': {
                    out += `
export enum ${type} {

}
`
                }
            }
        }
        return out
    }

    function buildTSFunction(returnType, name, params) {
        const sections = {
            call: '',
            anyParams: '',
            argsList: ''
        }

        const args = params.filter(p => !p.isOutParam);

        if (args.length) {
            sections.argsList = args.map(a => `${a.name}: ${a.type.schema}`).join(', ')
            sections.anyParams = `, { ${args.map(a => a.name).join(', ')} }`
        }

        const outParams = params.filter(p => p.isOutParam)

        sections.call = `await this.call('${name}'${sections.anyParams})`

        if (outParams.length) {
            const resultsList = [{
                name: 'ReturnValue',
                type: returnType,
            }, ...outParams].filter(p => p.type !== 'void')
            sections.returnSchema = `${name}Return`
            schemas.push(makeSchema(sections.returnSchema, resultsList))
            sections.body = `return ${sections.call} as ${name}Return`
        } else {
            if (returnType.schema === 'void') {
                sections.body = sections.call
                sections.returnSchema = 'void'
            } else {
                sections.body = [
                    `const { ReturnValue } = ${sections.call} as ReturnValue<${returnType.rschema}>`,
                    '        return ReturnValue'
                ].join('\n')
                sections.returnSchema = returnType.rschema
            }
        }

        methods.push(`
    async ${name}(${sections.argsList}): Promise<${sections.returnSchema}> {
        ${sections.body}
    }`)
    }
};