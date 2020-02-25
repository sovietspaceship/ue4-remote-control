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
// Implements interface for https://github.com/sovietspaceship/UE4RemoteControlLibrary
class RemoteControlLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/RemoteControlLibrary.Default__RemoteControlLibrary');
    }
    IsRunning() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('IsRunning');
            return ReturnValue;
        });
    }
    StartPIE() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('StartPIE');
            return ReturnValue;
        });
    }
    GetCurrentLevel() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetCurrentLevel');
            return ReturnValue;
        });
    }
}
exports.RemoteControlLibrary = RemoteControlLibrary;
//# sourceMappingURL=remote-control-library.js.map