"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const editor_level_library_1 = require("../classes/libraries/editor-level-library");
async function waitServer(delay = 1000, timeout = 0) {
    const ell = new editor_level_library_1.EditorLevelLibrary();
    let wait = true;
    if (timeout) {
        setTimeout(() => {
            wait = false;
        }, timeout);
    }
    while (wait) {
        try {
            await ell.SelectNothing();
            return true;
        }
        catch (error) {
            await delayAsync(delay);
        }
    }
    return false;
}
exports.waitServer = waitServer;
function delayAsync(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=server.js.map