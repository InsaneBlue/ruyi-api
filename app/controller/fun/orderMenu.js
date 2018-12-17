'use strict';

const Controller = require('egg').Controller;

const recipe = [
  { name: '爆炒手撕鸭', price: '38元', type: 1 },
  { name: '干锅手撕鸡', price: '38元', type: 1 },
  { name: '湘潭水煮活鱼', price: '50元', type: 1 },
  { name: '野山椒牛肉', price: '36元', type: 1 },
  { name: '酸菜鱼片', price: '58元', type: 1 },
]


class OrderMenuController extends Controller {
  async getMenu() {
    const { ctx, app } = this;
    const menuId = ctx.query.menuId;
    const funClient = app.mysql.get('fun');

    let dishList = [];
    if (menuId) {
      dishList = await funClient.query('SELECT id, name, price, type FROM dishList WHERE menuId = ?', [ menuId ]);
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

  async editDish() {
    const { ctx } = this;

  }

  async addDish() {
    const { ctx, app } = this;
    const funClient = app.mysql.get('fun');
    // const dishList = ctx.request.body.dishList;
    let sqlString = 'INSERT INTO  dishList(id, name, price, type, menuId) VALUES';
    const arr = recipe.map((value, index) => {
      value.menuId = 10000;
      value.id = 20000 + index;
      return value;
    });
    arr.forEach(value => {
      value.price = value.price.replace('元', '.00');
      sqlString += `(${value.id},"${value.name}","${value.price}",${value.type},${value.menuId}),`;
    });
    // const result = await funClient.query(sqlString);
    ctx.body = result;
  }
}

module.exports = OrderMenuController;
