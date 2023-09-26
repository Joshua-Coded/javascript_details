let getSimpleInterest = function(principle, rateOfInterest, noOfYears) {
    let si =(principle  * rateOfInterest * noOfYears) / 100;
    return si;
};

console.log(getSimpleInterest(2000, 6.8, 5));