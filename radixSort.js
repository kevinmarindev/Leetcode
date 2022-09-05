//you will need helper methods

// first methos is needed to obtain the desired digit within a number 

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}