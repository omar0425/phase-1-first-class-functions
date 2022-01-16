function receivesAFunction(func) {
  return func();
}

function returnsANamedFunction() {
  return function namedfunc() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
