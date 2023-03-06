import { RpcParamtype } from '@nestjs/microservices/enums/rpc-paramtype.enum';
import { createPipesRpcParamDecorator } from '@nestjs/microservices/utils/param.utils';
import { GetJwtPayloadParameterPipe } from '../pipes/get-jwt-payload-param.pipe';

export function Email(): ParameterDecorator {
  const decorator = createPipesRpcParamDecorator(RpcParamtype.PAYLOAD)(
    'access_token',
    new GetJwtPayloadParameterPipe('email'),
  );
  return decorator;
}
