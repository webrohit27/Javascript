// filter();

const myNums = [1, 2, 3, 4, 5, 6, 7, 77]

const newNums = myNums.filter( (num) => {
    return num > 4
} );

//console.log(newNums);

const num = [15, 20, 25, 30,40];

const num1 = num.map( (num) => { return num + 10} );

//console.log(num1);
//[ 25, 30, 35, 40, 50 ]



// chaining

const digit = [1, 5, 9, 3, 4];

const newDigit  = digit
                  .map( (digit) => digit * 10 )
                  .map( (digit) => digit + 10 )
                 .filter ( (digit) => digit > 40);

                  console.log(newDigit);
                  // [ 60, 100, 50 ]