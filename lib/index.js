"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Begin with initial set of primes 1 and 2
 * Start evaluating numbers at 3, incrementing by 2 to skip even numbers which are by definition not prime
 * Divide candidate by each number in the set of known primes beginning with 2 until a case with no remainder.
 * If all of the known primes leave an remainder, candidate is prime and added to the list
 * Repeat until list of primes has a length of n
 *
 * @param {number} n number of primes to find
 * @returns {number[]} set of n prime numbers
 */

function getNprimes(n) {
    var primes = [2];
    var x = 3;
    while (primes.length < n) {
        var isPrime = true;

        for (var i = 1; i < primes.length; i++) {
            if (x % primes[i] == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) primes.push(x);
        x += 2;
    }
    return primes.slice(0, n);
}

/**
 * Initialize nxn table with the first row and columns being the first n primes
 * @param {number[]}primes Finite set of primes
 * @returns {number[][]} Table with allocated nxn space and prime multiplicands
 */
function initNPrimeTable(primes) {
    var table = new Array(primes.length);
    for (var i = 0; i < primes.length; i++) {
        table[i] = new Array(primes.length);
        table[i][0] = primes[i];
    }
    table[0] = primes;
    return table;
}

/**
 * Builds an nxn multiplication table of the first n prime numbers
 * Iterates only through distinct pairs of primes rather than calculating every cell
 * @param {number} n number of primes to build multiplication table for
 * @returns {number[][]} multiplication table of first n primes
 */
function buildTableNPrimes(n) {
    var primes = [0].concat(getNprimes(n)); //Corner cell is not part of prime list
    var table = initNPrimeTable(primes);

    for (var r = 1; r < primes.length; r++) {
        for (var c = r; c < primes.length; c++) {
            var product = primes[r] * primes[c];
            table[r][c] = product;
            table[c][r] = product;
        }
    }

    return table;
}

/**
 * Print multiplication table of first 10 primes
 */
function main() {
    var primeTable = buildTableNPrimes(10);
    console.log(primeTable);
}

main();

exports.getNprimes = getNprimes;
exports.buildTableNPrimes = buildTableNPrimes;