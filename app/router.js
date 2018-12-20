'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 测试接口
  router.get('/test', controller.news.index);

  // fun
  router.get('/fun/orderMenu/getDish', controller.fun.orderMenu.getDish);
  router.post('/fun/orderMenu/updateDish', controller.fun.orderMenu.updateDish);
  // router.get('/fun/orderMenu/addDish', controller.fun.orderMenu.addDish);
};
