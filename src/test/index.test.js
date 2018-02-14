var assert = require('assert');
import { getNprimes } from '../index'

describe('prime-table-fc', function (){


    describe('#getNPrimes()', function() {
        var tenPrimes = [1,2,3,5,7,11,13,17,19,23];
        it('should return ' + tenPrimes +' when passed 10' , function(){
            assert.deepEqual(getNprimes(10), tenPrimes);
        });

        it('should return ' + tenPrimes.slice(0,1) +' when passed 1' , function(){
            assert.deepEqual(getNprimes(1), tenPrimes.slice(0,1));
        });

        it('should return ' + tenPrimes.slice(0,2) +' when passed 2' , function(){
            assert.deepEqual(getNprimes(2), tenPrimes.slice(0,2));
        });

        it('should return ' + tenPrimes.slice(0,3) +' when passed 3' , function(){
            assert.deepEqual(getNprimes(3), tenPrimes.slice(0,3));
        });

    });

});