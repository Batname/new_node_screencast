'use strict';
import db from 'db';
import log from 'logger';

let logger = log(module);

db.connect();

class User{
  constructor(user){
    this.user = user;
  }
  hello(who){
    logger(`${db.getPhrase('hello')} ${who.user}`);
  }
}

export default User;
