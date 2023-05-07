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
const editor_level_library_1 = require("../classes/libraries/editor-level-library");
function waitServer(delay = 1000, timeout = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const ell = new editor_level_library_1.EditorLevelLibrary();
        let wait = true;
        if (timeout) {
            setTimeout(() => {
                wait = false;
            }, timeout);
        }
        while (wait) {
            try {
                yield ell.SelectNothing();
                return true;
            }
            catch (error) {
                yield delayAsync(delay);
            }
        }
        return false;
    });
}
exports.waitServer = waitServer;
function delayAsync(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=server.js.map