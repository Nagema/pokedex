const ENDPOINT = 'https://api.jsonbin.io/b/5ab37f77989617146bd6eb29';


const fetchPokemons = () => fetch(ENDPOINT).then(response => response.json());

export { fetchPokemons };