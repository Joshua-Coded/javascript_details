// currying function
// output: @scott: Hai at 12:11 am - From James


function logMessage(receiver)
{
    let result1 = `@${receiver}`;
       return function(message)
   { 
      let result2 = `@${receiver}: ${message}`;
      return function(hours, minutes, timePeriod){
        let result3 = `${result2} at ${hours}:${minutes} ${timePeriod}`;
        return function(sender){
            let result4 = `${result3} - From ${sender}`;
            return result4;
        }
      }
   }
}

console.log(logMessage("scott")("Hello")(12, 28, "am")("James"));