let heroJSON = `{"name": "Captain of blablaLand",
                "age": 21,
                "power": "LooksMaxxing"}`;

let hero = JSON.parse(heroJSON);

let heroElement = document.getElementById("hero");

heroElement.innerHTML = `<h1>${hero.name}</h1>
                        <p>Age: ${hero.age}</p>
                        <p>Super power: ${hero.power}</p>`

