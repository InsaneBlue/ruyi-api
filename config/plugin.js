'use strict';

// had enabled by egg
// exports.static = true;

// view tpl
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
