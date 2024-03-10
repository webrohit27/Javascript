// async 
// Async is keyword which is used as async function.
// Async is always return promises.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise is resolved')
    }, 10000);
}); 

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise is resolved')
    }, 5000);
}); 

async function handlePromise() {
    console.log('Hello World');

    // js engine is waiting for promise 
    const val = await p1;
    console.log('bhokat ja');
    console.log(val);

    const val2 = await p2;
    console.log('bhokat ja');
    console.log(val2);
}
handlePromise(); 