const scpfn = require('../lib/scpfn').default;
const assert = require('assert');

scpfn.inject(Object.prototype)

assert("hello".let(it => it.toUpperCase()) == 'HELLO')
assert(JSON.stringify([0, 1, 2].also(it => it.pop())) == JSON.stringify([0, 1]))