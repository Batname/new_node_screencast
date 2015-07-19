export default function (module) {
  return function() {
    let args = [module.filename].concat(Array.from(arguments));
    console.log.apply(console, args)
  };
}
