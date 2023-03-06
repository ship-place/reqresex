"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const rpc_paramtype_enum_1 = require("@nestjs/microservices/enums/rpc-paramtype.enum");
const param_utils_1 = require("@nestjs/microservices/utils/param.utils");
const get_jwt_payload_param_pipe_1 = require("../pipes/get-jwt-payload-param.pipe");
function Email() {
    const decorator = (0, param_utils_1.createPipesRpcParamDecorator)(rpc_paramtype_enum_1.RpcParamtype.PAYLOAD)('access_token', new get_jwt_payload_param_pipe_1.GetJwtPayloadParameterPipe('email'));
    return decorator;
}
exports.Email = Email;
//# sourceMappingURL=get-jwt-email.decorator.js.map