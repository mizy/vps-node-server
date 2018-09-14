'use strict';
const util = require('util');
const exec = util.promisify(require("child_process").exec);
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
