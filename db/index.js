import phrases from './ru';

exports.connect = function (){
  this.phrases = phrases;
};

exports.getPhrase = function (name){
  if(!this.phrases[name]) {
    throw new Error(`Phrase ${name} doesn\`t exists`);
  }
  return phrases[name];
}