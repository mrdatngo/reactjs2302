
/*
    Given a number: number
    Check if it is a prime number ( a prime number is a number have only two 'uoc' are 1 and itself - except 1)
*/

// rule: 10^8 unit of operation in 1s

console.log("Start")

let number = 1000000000

// solution 1:
// let numberOfDivisor = 0

// for (let i = 1; i <= number; i++) { // complexity: O(n)
//     if (number % i == 0) {
//         // console.log(i)
//         numberOfDivisor++
//     }
// }

// if (numberOfDivisor == 2) {
//     console.log("YES")
// } else {
//     console.log("NO")
// }

// solution 2: complexity: O(n)
number = 4

// let isPrime = true
// if (number <= 1 ) {
//     isPrime = false
// } else if (number == 2) {
//     isPrime = true
// } else {
//     for (let i = 3; i <= Math.sqrt(number); i+= 2 ) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// log <=> binary algorithm
let isPrime = true
if (number <= 1 ) {
    isPrime = false
} else {
    for (let i = 2; i <= Math.sqrt(number); i++ ) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("YES")
} else {
    console.log("NO")
}