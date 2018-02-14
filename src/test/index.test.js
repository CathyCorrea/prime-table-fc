var assert = require('assert');
import { getNprimes, buildTableNPrimes } from '../index'

describe('prime-table-fc', function () {


    describe('#getNPrimes()', function () {

        var tenPrimes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
        it('should return ' + tenPrimes + ' when passed 10', function () {
            assert.deepEqual(getNprimes(10), tenPrimes);
        });

        it('should return ' + tenPrimes.slice(0,1) + ' when passed 1', function () {
            assert.deepEqual(getNprimes(1), tenPrimes.slice(0,1));
        });

        it('should return ' + tenPrimes.slice(0,2) + ' when passed 2', function () {
            assert.deepEqual(getNprimes(2), tenPrimes.slice(0,2));
        });

        it('should return ' + tenPrimes.slice(0,3) + ' when passed 3', function () {
            assert.deepEqual(getNprimes(3), tenPrimes.slice(0,3));
        });

        it('should return [] when passed 0', function () {
            assert.deepEqual(getNprimes(0), []);
        });

        var fifteenPrimes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];
        it('should return ' + fifteenPrimes + ' when passed 3', function () {
            assert.deepEqual(getNprimes(15), fifteenPrimes);
        });

    });

    describe('#buildTableNPrimes()', function () {

        var tenPrimesTable =
            [   [1,2,3,5,7,11,13,17,19,23],
                [2,4,6,10,14,22,26,34,38,46],
                [3,6,9,15,21,33,39,51,57,69],
                [5,10,15,25,35,55,65,85,95,115],
                [7,14,21,35,49,77,91,119,133,161],
                [11,22,33,55,77,121,143,187,209,253],
                [13,26,39,65,91,143,169,221,247,299],
                [17,34,51,85,119,187,221,289,323,391],
                [19,38,57,95,133,209,247,323,361,437],
                [23,46,69,115,161,253,299,391,437,529]

            ];

        it('should return 10x10 prime multiplication table when passed 10', function () {
            assert.deepEqual(buildTableNPrimes(10), tenPrimesTable);
        });

        it('should return 2x2 prime multiplication table when passed 2', function () {
            assert.deepEqual(buildTableNPrimes(2), [[1,2],[2,4]]);
        });

        it('should return 1x1 prime multiplication table when passed 1', function () {
            assert.deepEqual(buildTableNPrimes(1), [[1]]);
        });

        it('should return [[]] prime multiplication table when passed 0', function () {
            assert.deepEqual(buildTableNPrimes(0), [[]]);
        });


    });
});