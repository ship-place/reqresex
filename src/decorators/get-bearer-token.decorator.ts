import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const BearerAccessToken = createParamDecorator((_: undefined, context: ExecutionContext): string | null => {
  const req = context.switchToHttp().getRequest();
  try {
    const [bearer, token] = req.headers.authorization.split(' ');
    if (bearer !== 'Bearer') throw null;
    return token;
  } catch {
    return null;
  }
});
