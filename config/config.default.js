/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1667905570377_3670';

  // 在后台开启登录鉴权的校验   
  config.middleware = ['login'];
  config.login = {
    ignore: ['/api/login', '/api/register', '/api/logout']
  }


  config.security = {
    csrf: {
      enable: false
    }
  }

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.session = {
    key: 'scrum_login',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };




  return {
    ...config,
    ...userConfig,
  };
};
