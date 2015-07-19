'use strict';

import User from './User';
import db from 'db';
import log from 'logger';

let logger = log(module);

function run() {
  let den = new User('Den');
  let bat = new User('Bat');
  logger(db.getPhrase('Run successful'));
  den.hello(bat);
}

if(module.parent){
  exports.run = run;
} else {
  run();
}