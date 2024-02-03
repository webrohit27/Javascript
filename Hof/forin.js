// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

const myObject = {
    js: "javascript",
    py: "python",
    ML: "Machine Learning",
}

for (const key in myObject ) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}


// foreach

const coding = ["ruby", 'python', 'java']

coding.forEach(  (item) => {
   // console.log(item);
} );

coding.forEach( (item, index, arr) => {
   // console.log(item, index, arr);
});


// object in array

const myCode = [
    {
        languageName: 'javascript',
        languageFile: 'js' 
    },
    {
        languageName: 'Java',
        languageFile: "java"
    },
    {
        languageName: 'Python',
        languageFile: 'py'
    },
]

myCode.forEach( (item) => {
    console.log(item.languageFile);
})