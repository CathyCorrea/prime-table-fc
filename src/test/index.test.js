var assert = require('assert');
import { getNprimes, buildTableNPrimes } from '../index'

describe('prime-table-fc', function () {


    describe('#getNPrimes()', function () {

        //Mandated case of 10
        var fifteenPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,47];
        it('should return ' + fifteenPrimes + ' when passed 10', function () {
            assert.deepEqual(getNprimes(10), fifteenPrimes.slice(0,10));
        });

        //First prime value is seeded
        it('should return ' + fifteenPrimes.slice(0,1) + ' when passed 1', function () {
            assert.deepEqual(getNprimes(1), fifteenPrimes.slice(0,1));
        });

        //Second prime is the first to go through
        it('should return ' + fifteenPrimes.slice(0,2) + ' when passed 2', function () {
            assert.deepEqual(getNprimes(2), fifteenPrimes.slice(0,2));
        });

        it('should return ' + fifteenPrimes.slice(0,3) + ' when passed 3', function () {
            assert.deepEqual(getNprimes(3), fifteenPrimes.slice(0,3));
        });

        //0 case is important
        it('should return [] when passed 0', function () {
            assert.deepEqual(getNprimes(0), []);
        });

        //Case bigger than mandated 10
        it('should return ' + fifteenPrimes + ' when passed 15', function () {
            assert.deepEqual(getNprimes(15), fifteenPrimes);
        });

        //Negative input
        it('should return [] when passed -5', function () {
            assert.deepEqual(getNprimes(-5), []);
        });

        //Non number now that user input is possible
        it('should return [] when passed someString', function () {
            assert.deepEqual(getNprimes('someString'), []);
        });

        //Float
        it('should return '+fifteenPrimes.slice(0,3)+' when passed 3.5', function () {
            assert.deepEqual(getNprimes(3.5), fifteenPrimes.slice(0,3));
        });


    });

    describe('#buildTableNPrimes()', function () {

        var tenPrimesTable =
            [   [0,2,3,5,7,11,13,17,19,23,29],
                [2,4,6,10,14,22,26,34,38,46,58],
                [3,6,9,15,21,33,39,51,57,69,87],
                [5,10,15,25,35,55,65,85,95,115,145],
                [7,14,21,35,49,77,91,119,133,161,203],
                [11,22,33,55,77,121,143,187,209,253,319],
                [13,26,39,65,91,143,169,221,247,299,377],
                [17,34,51,85,119,187,221,289,323,391,493],
                [19,38,57,95,133,209,247,323,361,437,551],
                [23,46,69,115,161,253,299,391,437,529,667],
                [29,58,87,145,203,319,377,493,551,667,841]

            ];

        it('should return prime multiplication table of first 10 primes when passed 10', function () {
            assert.deepEqual(buildTableNPrimes(10), tenPrimesTable);
        });

        it('should return prime multiplication table of first 2 primes when passed 2', function () {
            assert.deepEqual(buildTableNPrimes(2), [[0,2,3],[2,4,6],[3,6,9]]);
        });

        it('should return prime multiplication table of first prime when passed 1', function () {
            assert.deepEqual(buildTableNPrimes(1), [[0,2],[2,4]]);
        });

        it('should return [[0]] prime multiplication table when passed 0', function () {
            assert.deepEqual(buildTableNPrimes(0), [[0]]);
        });

        //Negative input
        it('should return [[0]] when passed -10', function () {
            assert.deepEqual(buildTableNPrimes(-10), [[0]]);
        });

        //Non number now that user input is possible
        it('should return [[0]] when passed someString', function () {
            assert.deepEqual(buildTableNPrimes('someString'), [[0]]);
        });

    });
});