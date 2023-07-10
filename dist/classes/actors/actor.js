"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class AActor extends uobject_1.UObject {
    async SetActorLocation(newLocation, bSweep) {
        return await this.call('SetActorLocation', {
            newLocation,
            bSweep,
        });
    }
    async GetActorLocation() {
        const { ReturnValue } = await this.call('GetActorLocation');
        return ReturnValue;
    }
}
exports.AActor = AActor;
//# sourceMappingURL=actor.js.map