"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('app', () => ({
    API_URL: process.env.API_URL,
    TOKEN: process.env.TOKEN,
}));
//# sourceMappingURL=config.js.map