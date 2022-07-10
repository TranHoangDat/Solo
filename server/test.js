const obj = {
    a: 1,
    b: 2,
    c: undefined,
}

const newObj = Object.keys(obj).forEach(key => {
    if(obj[key] === undefined){
        delete obj[key];
    }
} );
console.log(obj);