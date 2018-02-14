'use strict';

var _index = require('../index');

var assert = require('assert');


describe('prime-table-fc', function () {

    describe('#getNPrimes()', function () {
        var tenPrimes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
        it('should return ' + tenPrimes + ' when passed 10', function () {
            assert.deepEqual((0, _index.getNprimes)(10), tenPrimes);
        });
    });
});