"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWarn = void 0;
const _types_1 = require("../@types");
function buildWarn(code, message, namespace) {
    return {
        status: _types_1.MsMessageStatus.WARN,
        data: null,
        error: {
            code,
            message,
        },
        namespace: namespace || 'SERVICE',
    };
}
exports.buildWarn = buildWarn;
//# sourceMappingURL=build-warn.js.map