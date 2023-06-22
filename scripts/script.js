function getPokemons (number = 151) {
  let pokemonListContainer = document.querySelector('.pokemon-list')
  let fixedUrl = 'https://pokeapi.co/api/v2/'
  fetch(`${fixedUrl}pokemon?limit=${number}&offset=0`).then(response => {
    response.json().then(result => {
      let pokemons = result.results
      pokemons.forEach(pokemon => {
        pokemonListContainer.innerHTML += pokemon.name + "<br>"
      })
    })
  })
}
