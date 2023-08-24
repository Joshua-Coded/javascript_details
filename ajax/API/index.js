const req = XMLHttpRequest();

req.onload = function(){
    console.log('loaded');
    const data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function(){
    console.log("Error loaded");
    console.log(this);
};



req.open('GET', 'https://swapi.dev/api/');
req.send();