"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
// Implements interface for https://github.com/sovietspaceship/UE4RemoteControlLibrary
class RemoteControlLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/RemoteControlLibrary.Default__RemoteControlLibrary');
    }
    async IsRunning() {
        const { ReturnValue } = await this.call('IsRunning');
        return ReturnValue;
    }
    async StartPIE() {
        const { ReturnValue } = await this.call('StartPIE');
        return ReturnValue;
    }
    async GetCurrentLevel() {
        const { ReturnValue } = await this.call('GetCurrentLevel');
        return ReturnValue;
    }
}
exports.RemoteControlLibrary = RemoteControlLibrary;
//# sourceMappingURL=remote-control-library.js.map