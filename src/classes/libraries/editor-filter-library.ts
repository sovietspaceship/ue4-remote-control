import { UObject } from '../uobject'
import { ReturnValue } from '../../api/schema'
import { FName, FString, EEditorScriptingFilterType, EEditorScriptingStringMatchType, UObjectRef, TSubclassOf } from '../../engine/types'
import { AActor } from '../actors/actor'

export class EditorFilterLibrary extends UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorFilterLibrary')
    }

    async ByActorLabel(TargetArray: AActor[], NameSubString: FString, StringMatch: EEditorScriptingStringMatchType, FilterType: EEditorScriptingFilterType, bIgnoreCase: boolean): Promise<UObjectRef<AActor>[]> {
        const { ReturnValue } = await this.call('ByActorLabel', { TargetArray, NameSubString, StringMatch, FilterType, bIgnoreCase }) as ReturnValue<UObjectRef<AActor>[]>
        return ReturnValue
    }

    async ByActorTag(TargetArray: AActor[], Tag: FName, FilterType: EEditorScriptingFilterType): Promise<UObjectRef<AActor>[]> {
        const { ReturnValue } = await this.call('ByActorTag', { TargetArray, Tag, FilterType }) as ReturnValue<UObjectRef<AActor>[]>
        return ReturnValue
    }

    async ByClass(TargetArray: UObject[], ObjectClass: TSubclassOf<UObject>, FilterType: EEditorScriptingFilterType): Promise<UObjectRef<UObject>[]> {
        const { ReturnValue } = await this.call('ByClass', { TargetArray, ObjectClass, FilterType }) as ReturnValue<UObjectRef<UObject>[]>
        return ReturnValue
    }

    async ByIDName(TargetArray: UObject[], NameSubString: FString, StringMatch: EEditorScriptingStringMatchType, FilterType: EEditorScriptingFilterType): Promise<UObjectRef<UObject>[]> {
        const { ReturnValue } = await this.call('ByIDName', { TargetArray, NameSubString, StringMatch, FilterType }) as ReturnValue<UObjectRef<UObject>[]>
        return ReturnValue
    }

    async ByLayer(TargetArray: AActor[], LayerName: FName, FilterType: EEditorScriptingFilterType): Promise<UObjectRef<AActor>[]> {
        const { ReturnValue } = await this.call('ByLayer', { TargetArray, LayerName, FilterType }) as ReturnValue<UObjectRef<AActor>[]>
        return ReturnValue
    }

    async ByLevelName(TargetArray: AActor[], LevelName: FName, FilterType: EEditorScriptingFilterType): Promise<UObjectRef<AActor>[]> {
        const { ReturnValue } = await this.call('ByLevelName', { TargetArray, LevelName, FilterType }) as ReturnValue<UObjectRef<AActor>[]>
        return ReturnValue
    }

    async BySelection(TargetArray: AActor[], FilterType: EEditorScriptingFilterType): Promise<UObjectRef<AActor>[]> {
        const { ReturnValue } = await this.call('BySelection', { TargetArray, FilterType }) as ReturnValue<UObjectRef<AActor>[]>
        return ReturnValue
    }
}