/*

Homework Assignment #5: Switch Statements

Details:

Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together.
The function should accept 4 parameters:
value1, label1, value2, label2
- value1 and value2 should accept positive integers
- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"
For example your function may be called in any of the following ways:
timeAdder(1,"minute",3,"minutes")
timeAdder(5,"days",25,"hours")
timeAdder(1,"minute",240,"seconds")

Requirements:
1. Your function should include at least one switch
2. Your function must accept any possible combination of inputs
3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:
return [5,"minutes"];
The exact label you choose to return for label3 ("minutes" for example) is up to you.
4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:
timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural
timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types
timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type
*/
convert each value according to its label ex 1 hour would be 60 minutes ...(20)
const timeAdder = (value1, label1, value2, label2) => {
    const output = [];
    if(typeof (value1 + value2) !== "number"){
        return false;
    }else if (value1 <= 0 || value2 <= 0){
        return false;
    }else if(value1 > 1){
        switch (label1) {
            case "second":
            case "minute":
            case "hour":
            case "day":
                return false;
        }
        switch (label1) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
                output.push(label1);
                break;
            default:
                return false;
        }
        
    }else if(value2 > 1){
        switch (label2) {
            case "second":
            case "minute":
            case "hour":
            case "day":
                return false;
            default: 
                return false;
                break;
        }
    }

    // seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"

        
   
}
console.log(timeAdder(10,"hours", 10, "hour"));
/*
Extra Credit:

Rather than returning an arbitrary label for label3, return the largest label that can be used with an integer value
For example if someone calls:
timeAdder(20,"hours",4,"hours")
You could return: [1,"day"] rather than [24,"hours"]
But if they called
timeAdder(20,"hours",5,"hours")
You would return [25,"hours"] because you could not use "days" with an integer value to represent 25 hours.
*/