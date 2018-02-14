var assert = require('assert');
import { getNprimes } from '../index'

describe('prime-table-fc', function (){


    describe('#getNPrimes()', function() {
        var tenPrimes = [1,2,3,5,7,11,13,17,19,23];
        it('should return ' + tenPrimes +' when passed 10' , function(){
            assert.deepEqual(getNprimes(10), tenPrimes);
        });

    });
});