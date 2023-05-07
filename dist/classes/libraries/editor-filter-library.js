"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class EditorFilterLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorFilterLibrary');
    }
    async ByActorLabel(TargetArray, NameSubString, StringMatch, FilterType, bIgnoreCase) {
        const { ReturnValue } = await this.call('ByActorLabel', { TargetArray, NameSubString, StringMatch, FilterType, bIgnoreCase });
        return ReturnValue;
    }
    async ByActorTag(TargetArray, Tag, FilterType) {
        const { ReturnValue } = await this.call('ByActorTag', { TargetArray, Tag, FilterType });
        return ReturnValue;
    }
    async ByClass(TargetArray, ObjectClass, FilterType) {
        const { ReturnValue } = await this.call('ByClass', { TargetArray, ObjectClass, FilterType });
        return ReturnValue;
    }
    async ByIDName(TargetArray, NameSubString, StringMatch, FilterType) {
        const { ReturnValue } = await this.call('ByIDName', { TargetArray, NameSubString, StringMatch, FilterType });
        return ReturnValue;
    }
    async ByLayer(TargetArray, LayerName, FilterType) {
        const { ReturnValue } = await this.call('ByLayer', { TargetArray, LayerName, FilterType });
        return ReturnValue;
    }
    async ByLevelName(TargetArray, LevelName, FilterType) {
        const { ReturnValue } = await this.call('ByLevelName', { TargetArray, LevelName, FilterType });
        return ReturnValue;
    }
    async BySelection(TargetArray, FilterType) {
        const { ReturnValue } = await this.call('BySelection', { TargetArray, FilterType });
        return ReturnValue;
    }
}
exports.EditorFilterLibrary = EditorFilterLibrary;
//# sourceMappingURL=editor-filter-library.js.map