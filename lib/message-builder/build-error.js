"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildError = void 0;
const _types_1 = require("../@types");
function buildError(code, message, namespace) {
    return {
        status: _types_1.MsMessageStatus.ERROR,
        data: null,
        error: {
            code,
            message,
        },
        namespace: namespace || process.env.MS_NAME || 'SERVICE',
    };
}
exports.buildError = buildError;
//# sourceMappingURL=build-error.js.map