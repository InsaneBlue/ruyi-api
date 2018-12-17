'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 测试接口
  router.get('/test', controller.news.index);

  // fun
  router.get('/fun/orderMenu/getMenu', controller.fun.orderMenu.getMenu);
  router.get('/fun/orderMenu/editDish', controller.fun.orderMenu.editDish);
  router.get('/fun/orderMenu/addDish', controller.fun.orderMenu.addDish);
};
