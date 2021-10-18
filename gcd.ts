
/**
 * Euclidean algorithm
 */
export default function gcd (a, b) {
   while (b !== 0 && b !== 0n) {
      const temp = b
      b = a % b
      a = temp
   }
   return a;
}
