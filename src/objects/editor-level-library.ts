import { UObject } from './uobject'

export class EditorLevelLibrary extends UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorLevelLibrary')
    }
    async getAllLevelActors(): Promise<string[]> {
        const { ReturnValue } = await this.call('GetAllLevelActors')
        return ReturnValue as string[]
    }
}