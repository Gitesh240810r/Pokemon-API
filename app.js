let currentPokemon;

async function fetchData(){

    try{
        const api = await fetch("https://pokeapi.co/api/v2/pokemon/");
        if (!api.ok){ throw new Error("failed to fetch data!");}
        const data = await api.json();
        
        const pokemonLength = data.count;
        const randomIndex = Math.floor(Math.random()*1350) + 1;

        const pokemon =  await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`);
        const data2 = await pokemon.json();

        currentPokemon = data2.species.name.toLowerCase();
        console.log(currentPokemon);

        const img = document.getElementById("img");
        img.src = data2.sprites.front_default;

        document.getElementById("output").innerHTML = "";
    }
    
    catch(error){console.log(error);}
}

function checkPokemon(){
    const search = document.getElementById("search").value.toLowerCase();
    const output = document.getElementById("output");
    
    if ( search === currentPokemon){
        output.innerHTML = ("you've found the pokemon!");
        document.getElementById("search").value = "";
    }
    if ( search === " "){
        output.innerHTML = ("enter something");
        document.getElementById("search").value = "";
    }
    else{
        output.innerHTML = ("Wrong Pokemon!");
    }
}
