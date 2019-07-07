
// reinforce the function below with some defensive code aka expections
const reverseJsonArray = (jsonArray) => {
    // we try the code to be executed
    try{
        const reversedArray = JSON.parse(jsonArray).reverse();
        return JSON.stringify(reversedArray);
    }catch(err){
        // if there is an exception return false
        return false;
    }
}


console.log("Can I return a Json-Stringyfied Array:",reverseJsonArray('["4a","b","c"]'));
console.log("Can I return a non Stringyfied Number:",reverseJsonArray(1234));
console.log("Can I return nothing:",reverseJsonArray());
console.log("Can I return a Boolean:",reverseJsonArray(true));
console.log("Can I return a Json Non-Stringyfied Array:",reverseJsonArray([1,2,3,4]));
console.log("Can I return a string argument that is not properly formatted JSON:",reverseJsonArray('{"encbody":"{"build":28830}","GUID":"9wW6h3iKWmVkzd8jDDb7","x-bt-seq":"0"}'));
console.log("Can I return a Stringified-Array that only has one value:",reverseJsonArray('["hi"]'));
console.log("Can I return a Stringified-Array that is empty:",reverseJsonArray('[]'));
console.log("Can I return a Stringified-Array that has an even-number of values:",reverseJsonArray('[1,2,3,4,5,6]'));
console.log("Can i return a Stringified-Array that has an odd-number of values:",reverseJsonArray('[1,2,3,4,5]'));
console.log('Can I return a Stringified-Array of Objects:',reverseJsonArray('[{"name":"John Smith"},{"name":"Jane Doe"},{"name":"Jack Robin"}]'))
