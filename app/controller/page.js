'use strict';

const Controller = require('egg').Controller;

class PageController extends Controller {
  async render() {
    const params = this.ctx.params;
    this.ctx.body = 'hi, egg';
  }
}

module.exports = PageController;
