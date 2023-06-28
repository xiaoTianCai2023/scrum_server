'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  session: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  }
};
