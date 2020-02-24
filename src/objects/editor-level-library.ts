import { UObject } from './uobject'
import { UnknownObject } from '../api/schema'

export class EditorLevelLibrary extends UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorLevelLibrary')
    }
    async getAllLevelActors(): Promise<string[]> {
        const { ReturnValue } = await this.call('GetAllLevelActors') as UnknownObject
        return ReturnValue as string[]
    }
}