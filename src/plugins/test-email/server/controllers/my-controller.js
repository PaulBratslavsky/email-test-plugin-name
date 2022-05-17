'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('test-email')
      .service('myService')
      .getWelcomeMessage();
  },
};
