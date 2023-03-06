"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcHttpException = void 0;
const microservices_1 = require("@nestjs/microservices");
class RpcHttpException extends microservices_1.RpcException {
    constructor(error, code) {
        super(error);
        this.code = code || 500;
    }
}
exports.RpcHttpException = RpcHttpException;
//# sourceMappingURL=rpc-http.exception.js.map