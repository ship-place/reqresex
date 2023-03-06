"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BearerAccessToken = void 0;
const common_1 = require("@nestjs/common");
exports.BearerAccessToken = (0, common_1.createParamDecorator)((_, context) => {
    const req = context.switchToHttp().getRequest();
    try {
        const [bearer, token] = req.headers.authorization.split(' ');
        if (bearer !== 'Bearer')
            throw null;
        return token;
    }
    catch (_a) {
        return null;
    }
});
//# sourceMappingURL=get-bearer-token.decorator.js.map