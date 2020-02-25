import { UObject } from '../uobject';
import { FName, FString, EEditorScriptingFilterType, EEditorScriptingStringMatchType, UObjectRef, TSubclassOf } from '../../engine/types';
import { AActor } from '../actors/actor';
export declare class EditorFilterLibrary extends UObject {
    constructor();
    ByActorLabel(TargetArray: AActor[], NameSubString: FString, StringMatch: EEditorScriptingStringMatchType, FilterType: EEditorScriptingFilterType, bIgnoreCase: boolean): Promise<UObjectRef<AActor>[]>;
    ByActorTag(TargetArray: AActor[], Tag: FName, FilterType: EEditorScriptingFilterType): Promise<UObjectRef<AActor>[]>;
    ByClass(TargetArray: UObject[], ObjectClass: TSubclassOf<UObject>, FilterType: EEditorScriptingFilterType): Promise<UObjectRef<UObject>[]>;
    ByIDName(TargetArray: UObject[], NameSubString: FString, StringMatch: EEditorScriptingStringMatchType, FilterType: EEditorScriptingFilterType): Promise<UObjectRef<UObject>[]>;
    ByLayer(TargetArray: AActor[], LayerName: FName, FilterType: EEditorScriptingFilterType): Promise<UObjectRef<AActor>[]>;
    ByLevelName(TargetArray: AActor[], LevelName: FName, FilterType: EEditorScriptingFilterType): Promise<UObjectRef<AActor>[]>;
    BySelection(TargetArray: AActor[], FilterType: EEditorScriptingFilterType): Promise<UObjectRef<AActor>[]>;
}
