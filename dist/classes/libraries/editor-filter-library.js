"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class EditorFilterLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/EditorScriptingUtilities.Default__EditorFilterLibrary');
    }
    ByActorLabel(TargetArray, NameSubString, StringMatch, FilterType, bIgnoreCase) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ByActorLabel', { TargetArray, NameSubString, StringMatch, FilterType, bIgnoreCase });
            return ReturnValue;
        });
    }
    ByActorTag(TargetArray, Tag, FilterType) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ByActorTag', { TargetArray, Tag, FilterType });
            return ReturnValue;
        });
    }
    ByClass(TargetArray, ObjectClass, FilterType) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ByClass', { TargetArray, ObjectClass, FilterType });
            return ReturnValue;
        });
    }
    ByIDName(TargetArray, NameSubString, StringMatch, FilterType) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ByIDName', { TargetArray, NameSubString, StringMatch, FilterType });
            return ReturnValue;
        });
    }
    ByLayer(TargetArray, LayerName, FilterType) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ByLayer', { TargetArray, LayerName, FilterType });
            return ReturnValue;
        });
    }
    ByLevelName(TargetArray, LevelName, FilterType) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ByLevelName', { TargetArray, LevelName, FilterType });
            return ReturnValue;
        });
    }
    BySelection(TargetArray, FilterType) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('BySelection', { TargetArray, FilterType });
            return ReturnValue;
        });
    }
}
exports.EditorFilterLibrary = EditorFilterLibrary;
//# sourceMappingURL=editor-filter-library.js.map