import axios from "axios";

export const getPokemons = async () => {
  try {
    const request = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    const { data } = request;

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemon = async url => {
  try {
    const pokemon = await axios.get(url);
    console.log("Pokemon:", pokemon);
  } catch (error) {
    console.error(error);
  }
};
