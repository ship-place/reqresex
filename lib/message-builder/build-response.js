"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildResponse = void 0;
const _types_1 = require("../@types");
function buildResponse(data = '', namespase) {
    return {
        status: _types_1.MsMessageStatus.SUCCESS,
        data,
        error: null,
        namespace: namespase || 'SERVICE',
    };
}
exports.buildResponse = buildResponse;
//# sourceMappingURL=build-response.js.map