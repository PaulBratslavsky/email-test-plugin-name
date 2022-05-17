'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('email')
      .service('myService')
      .getWelcomeMessage();
  },
};
