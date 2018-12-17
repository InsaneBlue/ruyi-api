'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const ctx = this.ctx;
    // const page = ctx.query.page || 1;
    // const newList = await ctx.service.news.news(page);
    const list = [
      { id: 1, title: 'this is news 1', url: '/news/1' },
      { id: 2, title: 'this is news 2', url: '/news/2' },
    ];
    const sysClient = this.app.mysql.get('sys');
    const result = await sysClient.query('SHOW TABLES');
    await ctx.render('news.tpl', { list, result });
  }
}

module.exports = NewsController;
