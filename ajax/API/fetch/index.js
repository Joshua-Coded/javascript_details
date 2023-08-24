// making fetch request

// fetch('https://swapi.dev/api/')
// .then((res) => {
//     return res.json()
// })https://swapi.dev/api/
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// });

const loadStarWars = async () => {
    const res = await fetch('https://swapi.dev/api/')
    const data = res.json();
    console.log(data);
}