/**
 * <p>Begin with initial set of primes, 2
 * Start evaluating numbers at 3, incrementing by 2 to skip even numbers which are by definition not prime
 * Divide candidate by each number in the set of known primes beginning with 2 until a case with no remainder.
 * If all of the known primes leave an remainder, candidate is prime and added to the list
 * Repeat until list of primes has a length of n</p>
 *
 * <p>Time complexity: O(P*n) where P is the largest prime and n is the number of primes<br>
 * P*n are the biggest denominators in this method.<br>
 * Outer loop: (P-2)/2 => P<br>
 * Inner loop: N + (N-1) + (N-2)...2, 1 => N</p>
 *
 * @param {number} n number of primes to find
 * @returns {number[]} set of n prime numbers
 */

function getNprimes(n){
    var primes = [2];
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
 * Initialize nxn table with the first row and columns being the first n primes
 * @param {number[]}primes Finite set of primes
 * @returns {number[][]} Table with allocated nxn space and prime multiplicands
 */
function initNPrimeTable(primes) {
    var table = new Array(primes.length);
    for (let i = 0; i < primes.length; i++) {
        table[i] = new Array(primes.length);
        table[i][0] = (primes[i]);
    }
    table[0] = primes;
    return table;
}

/**
 * <p>Builds an nxn multiplication table of the first n prime numbers
 * Iterates only through distinct pairs of primes rather than calculating every cell</p>
 *
 * <p>Time complexity: O(P*N + N^2) where P is the largest prime and N is the number of primes<br>
 * getNPrimes: P*N <br>
 * Outer loop: N <br>
 * Inner loop: N+(N-1)+(N-2)...2,1 <br>
 * P*N + N*N => P*N + N^2</p>
 *
 * @param {number} n number of primes to build multiplication table for
 * @returns {number[][]} multiplication table of first n primes
 */
function buildTableNPrimes(n){
    var primes = [0].concat(getNprimes(n));  //Corner cell is not part of prime list
    var table = initNPrimeTable(primes);

    for(let r = 1; r < primes.length; r++){
        for(let c = r; c < primes.length; c++) {
            let product = primes[r] * primes[c];
            table[r][c] = product;
            table[c][r] = product;
        }
    }

    return table;
}

/**
 * Print multiplication table of first 10 primes
 */
function main(){
    var primeTable = buildTableNPrimes(10);
    console.log(primeTable);
}

main();

export { getNprimes, buildTableNPrimes };