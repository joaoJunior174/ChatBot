import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  API_URL: process.env.API_URL,
  TOKEN: process.env.TOKEN,
}));
