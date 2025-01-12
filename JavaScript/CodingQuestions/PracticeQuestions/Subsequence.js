/*You have given a string A having Uppercase English letters.
You have to find the number of pairs (i, j) such that A[i] = 'A', A[j] = 'G' and i < j.
 A = "ABCGAG"
 output = 3
 Subsequence "AG" is 3 times in given string, the pairs are (0, 3), (0, 5) and (4, 5). 
*/

let str = "ABCGAG";

function bruteForce(str) {
  let countAG = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      for (let j = i; j < str.length; j++) {
        if (str[j] === "G") {
          countAG++;
        }
      }
    }
  }
  return countAG++;
}

let count = bruteForce(str);
console.log(count);

function optimized(str) {
  let countOfA = 0;
  let countOfAG = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      countOfA++;
    } else if (str[i] === "G") {
      countOfAG = countOfA + countOfAG;
    }
  }
  return countOfAG;
}

let countAG = optimized(str);
console.log(countAG);
