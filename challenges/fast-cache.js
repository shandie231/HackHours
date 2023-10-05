/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
sdfsd*/

const fastCache = func => {
    ///create an empty object
    let cacheObj = {};
    console.log(cacheObj);


    return function(arg){
        
        console.log(arg);
        //it sounds like i need to use reduce...
        cacheObj[arg] = func(arg);
        console.log(cacheObj);
        return cacheObj;
    }

  
};

const newFunc = (arg) => {
    return arg * arg;
}

console.log(fastCache(newFunc(2)));


/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = func => {
  
};

module.exports = {fastCache, fastCacheAdvanced};