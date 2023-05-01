// setInterval function 


function callBack()
{
    console.log("Click me after 2 seconds")
}
let myInterval = setInterval(callBack, 2000)


function stopInterval(){
    clearInterval(myInterval)
}

setTimeout(stopInterval, 20 * 1000)
