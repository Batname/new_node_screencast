'use strict';
import phrases from './ru';

class User{
  constructor(user){
    this.user = user;
  }
  hello(who){
    console.log(`${phrases.hello} ${who.user}`);
  }
}

export default User;
