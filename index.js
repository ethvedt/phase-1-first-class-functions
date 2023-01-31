function receivesAFunction(func) {
    return func();
}

function returnsANamedFunction() {
    return function namedFunction(){};
}

function returnsAnAnonymousFunction() {
    return function () {};
}