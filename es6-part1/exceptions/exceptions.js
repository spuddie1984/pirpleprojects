
// reinforce the function below with some defensive code aka expections
const reverseJsonArray = (jsonArray) => {
    try{
        const reversedArray = JSON.parse(jsonArray).reverse();
        return JSON.stringify(reversedArray);
    }catch(err){
        console.log(false)
    }
    finally{
        
    }
    
}

console.log(reverseJsonArray('[2"4a","b","c"]'));