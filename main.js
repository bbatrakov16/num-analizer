// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  document.getElementById("prime").innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.
// 1
function getSign(num) {
  if (num > 0) {
    return "pos";
  } else if (num < 0) {
    return "neg";
  } else {
    return "zero";
  }
}

// 2
function evenOrOdd(num) {
  if (num % 2 == 0) {
    return "even";
  } else if (num % 2 != 0) {
    return "odd";
  }
}

// 3
function multipleOf10(num) {
  if (num % 10 == 0) {
    return true;
  } else if (num % 10 != 0) {
    return false;
  }
}

// 4
function numDigits(num) {
  return Math.abs(num).toString().length;
}

// 5
function isPrime(num) {
  if (num <= 1) return false;

  let i = 2; // Start checking for factors from 2
  while (num > i) {
    console.log(`Checking i: ${i}`);
    console.log(`remainder is: ${num % i}`);
    if (num % i == 0) {
      console.log("remainder is 0, so this number is NOT prime");
      return false;
    }
    i++;
  }
  console.log("loop ended without breaking, so number is prime");
  return true;
}

// 5
// 5 % 2 = 1 keep going
// 5 % 3 = 2 keep going
// 5 % 4 = 1 keep going
// end loop when you get to 1 less than the number
// loop ended, didn't find a remaind of zero, so the number must be prime. Return true.

// 6
// 6 % 2 = 0   remaind is zero. This number is NOT prime.  Return false.