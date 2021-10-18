
// getPrimesUntil relies on primes.at(-1) to exist
// _findIndexOfFirstPrimeNotLessThan relies on primes.length - 1 !== 0
let primes: number[] = [2, 3]

// Uses binary search
function _findIndexOfFirstPrimeNotLessThan(n: number) {
   let l = -1;            // primes[l] < n
   let r = primes.length; // primes[r] >= n
   while (l + 1 !== r) {
      const i = Math.floor((l + r) / 2)
      const e = primes[i]
      if (e < n) {
         l = i
      } else if (e === n) {
         return i
      } else {
         r = i
      }
   }

   return r
}

/** Return an array of primes in [0, n) */
export default function getPrimesUntil(n: number) {
    let start = primes.at(-1) + 1

    for (let i = start; i < n; i++) {
        if (primes.some(prime => i % prime === 0)) {
            continue
        }

        primes.push(i)
    }

    return primes.slice(0, _findIndexOfFirstPrimeNotLessThan(n))
}
