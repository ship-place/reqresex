"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ReqresexService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqresexService = void 0;
const common_1 = require("@nestjs/common");
const msgBuilder = require("./message-builder");
let ReqresexService = ReqresexService_1 = class ReqresexService {
    constructor(name) {
        this.logger = new common_1.Logger(ReqresexService_1.name);
        this.name = name || 'service';
        this.logger.log('Service Init');
    }
    buildRequest(data = '', access_token) {
        return msgBuilder.buildRequest(data, access_token);
    }
    buildResponse(data = '') {
        return msgBuilder.buildResponse(data, this.name);
    }
    buildWarn(code, message) {
        return msgBuilder.buildWarn(code, message, this.name);
    }
    buildError(code, message) {
        return msgBuilder.buildError(code, message, this.name);
    }
};
ReqresexService = ReqresexService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String])
], ReqresexService);
exports.ReqresexService = ReqresexService;
//# sourceMappingURL=reqresex.service.js.map