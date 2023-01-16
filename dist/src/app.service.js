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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    constructor(configService, httpService) {
        this.configService = configService;
        this.httpService = httpService;
    }
    async requestBloomResponse(question) {
        const apiUrl = this.configService.get('API_URL');
        const token = this.configService.get('TOKEN');
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        };
        const payload = {
            inputs: question,
            parameters: {
                temperature: 1,
                min_length: 25,
                max_new_tokens: 60,
                return_full_text: true,
                do_sample: false,
                seed: 10,
                early_stopping: false,
                length_penalty: 0.0,
            },
            options: {
                use_cache: false,
                wait_for_model: false,
            },
        };
        return await (0, rxjs_1.lastValueFrom)(this.httpService
            .post(`${apiUrl}`, payload, { headers })
            .pipe((0, rxjs_1.map)((resp) => resp.data)));
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map