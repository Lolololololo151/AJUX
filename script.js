// let heroJSON = `{"name": "Captain of blablaLand",
//                 "age": 21,
//                 "power": "LooksMaxxing"}`;

// let hero = JSON.parse(heroJSON);

// let heroElement = document.getElementById("hero");

// heroElement.innerHTML = `<h1>${hero.name}</h1>
//                         <p>Age: ${hero.age}</p>
//                         <p>Super power: ${hero.power}</p>`

let url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

fetch(url)
    .then(async function(response) {
        let data = await response.json()
        console.log(data)
    })