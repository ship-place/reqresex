"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqresexModule = void 0;
const common_1 = require("@nestjs/common");
const reqresex_service_1 = require("./reqresex.service");
let ReqresexModule = class ReqresexModule {
};
ReqresexModule = __decorate([
    (0, common_1.Module)({
        providers: [reqresex_service_1.ReqresexService],
        exports: [reqresex_service_1.ReqresexService],
    })
], ReqresexModule);
exports.ReqresexModule = ReqresexModule;
//# sourceMappingURL=reqresex.module.js.map