const div_pokemons = document.querySelector("#div_pokemons")

 

function intervalo_pokemon(start=0, end=10) {
    div_pokemons.innerHTML = ""

    // const start = 0
    // const end = 10

    for (let i = start; i < end; i++) {
        if(i>0){
            const img = new Image()
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`
            div_pokemons.appendChild(img)
        }
    }
}

intervalo_pokemon(0, 10)