
//document.getElementById("personagens").innerHTML = 2;

const personagensContador = document.getElementById("personagens");
const luasContador = document.getElementById("luas");
const planetasContador = document.getElementById("planetas");
const navesContador = document.getElementById("naves");


preencherContadores();
function preencherContadores() {
    //personagensContador.innerHTML = swapiGet('people/').count;
    Promise.all([swapiGet('people/'), 
                swapiGet('vehicles/'),
                swapiGet('planets/'),
                swapiGet('starships/')])
    .then(function (results) {
        personagensContador.innerHTML = results[0].data.count;
        luasContador.innerHTML = results[1].data.count;
        planetasContador.innerHTML = results[2].data.count;
        navesContador.innerHTML = results[3].data.count;
        console.log(results);
  });

}


function swapiGet(param){
    return axios.get(`https://swapi.dev/api/${param}`);
  

}

