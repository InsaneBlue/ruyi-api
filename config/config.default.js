'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539616323125_8455';

  // add your config here
  config.middleware = [];

  // view
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.mysql = {
    // 多数据库信息配置
    clients: {
      fun: {
        database: 'fun',
        host: 'xxx',
        port: 'xxx',
        user: 'xxx',
        password: 'xxx',
      },
      sys: {
        database: 'sys',
        host: 'xxx',
        port: 'xxx',
        user: 'xxx',
        password: 'xxx',
      },
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // 添加news的配置项
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.cluster = {
    listen: {
      port: 7001,
      hostname: '172.16.0.9',
    },
  };

  return config;
};
