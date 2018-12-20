'use strict';

const Controller = require('egg').Controller;
class OrderMenuController extends Controller {
  async getDish() {
    const { ctx, app } = this;
    const { menu_id } = ctx.query;
    const funClient = app.mysql.get('fun');

    let dishList = [];
    if (menu_id) {
      dishList = await funClient.query('SELECT id, name, price, type FROM dishList WHERE menu_id = ?', [ menu_id ]);
    }

    const responseObj = {
      body: {
        dishList,
      },
      ret: 0,
      msg: 'ok',
    };
    ctx.body = responseObj;
  }

  async updateDish() {
    const { ctx, app } = this;
    const funClient = app.mysql.get('fun');

    // ctx.request.body = {
    //   action: 'add',
    //   dish_list: [
    //     { name: '番茄鸡蛋汤', price: '12元', type: 3, menu_id: 10000 },
    //     { name: '紫菜蛋汤', price: '12元', type: 3, menu_id: 10000 },
    //   ],
    // };

    const { action, dish_list } = ctx.request.body;
    let response = null;
    if (!dish_list) {
      ctx.status = 400;
    }

    if (action === 'add') {
      response = await funClient.insert('dishList', dish_list);

    } else if (action === 'delete') {
      response = await funClient.delete('dishList', { id: 10054 });
    } else {
      // const option = {
      //   where: [
      //     id,
      //   ],
      // };
      // response = await funClient.update('dishList', dish_list);
    }

    const { affectedRows } = response;
    if (affectedRows) {
      ctx.body = {
        ret: 0,
        msg: 'ok',
      };
    } else {
      ctx.body = {
        ret: -1,
        msg: 'error',
      };
    }

  }

}

module.exports = OrderMenuController;
