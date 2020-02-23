import { UObject } from './uobject'

export class EditorLevelLibrary extends UObject {
    objectPath = '/Script/EditorScriptingUtilities.Default__EditorLevelLibrary'

    async getAllLevelActors() {
        return this.call('GetAllLevelActors')
    }
}