/**
 * Begin with initial set of primes 1 and 2
 * Start evaluating numbers at 3, incrementing by 2 to skip even numbers which are by definition not prime
 * Divide candidate by each number in the set of known primes beginning with 2 until a case with no remainder.
 * If all of the known primes leave an remainder, candidate is prime and added to the list
 * Repeat until list of primes has a length of n
 *
 * @param n number of primes
 * @returns {number[]} set of n prime numbers
 */

function getNprimes(n){
    var primes = [ 1, 2];
    var x = 3;
    while(primes.length < n){
        var isPrime = true;

        for(let i = 1; i < primes.length; i++){
            if(x % primes[i] == 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime)
            primes.push(x);
        x += 2;
    }
    return primes.slice(0,n);
}

/**
 * Brute force building of a multiplication table
 * @param n number of primes to build multiplication table for
 * @returns {any[]} multiplication table
 */
function buildTableNPrimes(n){
    var primes = getNprimes(n);
    var table = new Array(primes.length);
    for (let i=0; i<primes.length; i++){
        table[i] = new Array(primes.length);
    }
    table[0] = primes;

    for(let r = 1; r < primes.length; r++){
        table[r][0] = primes[r];
        for(let c = 1; c < primes.length; c++){
            table[r][c] = table[r][0] * table[0][c];
        }
    }

    return table;
}

function main(){
    buildTableNPrimes(10);
}

main();

export { getNprimes, buildTableNPrimes };