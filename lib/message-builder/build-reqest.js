"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRequest = void 0;
function buildRequest(data = '', access_token, namespace) {
    return {
        status: null,
        access_token,
        data,
        error: null,
        namespace: namespace || null,
    };
}
exports.buildRequest = buildRequest;
//# sourceMappingURL=build-reqest.js.map