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
    const { ctx } = this;
    const { ctx, app } = this;
    const funClient = app.mysql.get('fun');

    const { action, menu_id, dish_list } = ctx.request.body;
    const response = null;
    if(!dish_list) {
      ctx.status = 400;
    }

    if(action === 'create') {
      response = await funClient.insert('dishList', dish_list);
    }else {
      const option = {
        where: [
          id,
        ]
      }
      response = await funClient.update('dishList', dish_list);
    }

    // ctx.body = {
    //   body: {
    //     dishList: [],
    //   },
    //   ret: 0,
    //   msg: 'ok',
    // }




    // // const dishList = ctx.request.body.dishList;
    // let sqlString = 'INSERT INTO  dishList(id, name, price, type, menu_id) VALUES';
    // const arr = recipe.map((value, index) => {
    //   value.menu_id = 10000;
    //   value.id = 20000 + index;
    //   return value;
    // });
    // arr.forEach(value => {
    //   value.price = value.price.replace('元', '.00');
    //   sqlString += `(${value.id},"${value.name}","${value.price}",${value.type},${value.menu_id}),`;
    // });
    // // const result = await funClient.query(sqlString);
    // ctx.body = result;

  }

}

module.exports = OrderMenuController;
