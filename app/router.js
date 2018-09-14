'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/api/shell', controller.shell.shell);
  router.get('/shell/panel', controller.shell.panel);

  router.resources('socket', '/socket', controller.socket);

  
  router.get('/page',controller.page.render);
  router.get('/page/:module',controller.page.render);
  router.get('/page/:module/:page',controller.page.render);
  router.get('/page/:module/:page/:number',controller.page.render)
};
