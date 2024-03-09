// async 
// Async is keyword which is used as async function.
// Async is always return promises.

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise is resolved')
    }, 10000);
}); 

async function handlePromise() {
    console.log('Hello World');

    // js engine is waiting for promise 
    const val = await p;
    console.log('bhokat ja');
    console.log(val);
}
handlePromise();