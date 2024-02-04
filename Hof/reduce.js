// Reduce()
 // The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

  const myDigit = [7, 8, 9];

    //const myTotal = myDigit.reduce(function (acc, currval) {
    //console.log(`acc: ${acc} and currval: ${currval}`);
    //return acc + currval ; // acc = accumulator, currval = current value.
 // }, 0)  // 0 is use as index array. 


  // now we execute problem via arrow function.

  myTotal = myDigit.reduce( (acc, currval) => acc+currval, 0)


  // console.log(myTotal);
  // 24

const myBookStore = [
    {
        bookName : 'Harry Potter',
        price : 500,
    },
    {
        bookName : 'Leo',
        price: 700,
    },
    {
        bookName : '12th Fail',
        price: 1000,
    },
    {
        bookName : 'Flying Sikh',
        price: 800,
    },
]

const payToMe = myBookStore.reduce( (acc, item) => acc + item.price, 0);

console.log(payToMe);


