// makin axios request

// axios.get('https://swapi.dev/api/')
// .then((res) => {
//     console.log("response", res);
// })
// .catch((err) => {
//     console.log("error", err);
// })

// the asynchronous way

const getStarWars = async(id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data);
    }
    catch(err){
        console.log("error", err);
    }
}

getStarWars(3)