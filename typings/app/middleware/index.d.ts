// This file is created by egg-ts-helper@1.34.3
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportLogin = require('../../../app/middleware/login');

declare module 'egg' {
  interface IMiddleware {
    login: typeof ExportLogin;
  }
}
