import { match } from "node:assert";
import type { State } from "./state.js";


export async function commandInspect(state: State, ...args: string[]): Promise<void> {

    /*const locationName = args[0];

    if (!locationName) {
        console.log("You must provide a location area name.");
        state.rl.prompt();
        return;
    }

    const location = await state.pokeapi.fetchLocation(locationName);

    console.log(`Exploring ${locationName}...`);
    console.log("Found Pokemon:");

    for (const obiekt of location.pokemon_encounters) {
        console.log(` - ${obiekt.pokemon.name}`);
    }*/


    const pokemonName = args[0];

    if (!pokemonName) {
        console.log("You must provide a pokemon name.");
        state.rl.prompt();
        return;
    }

    // state.pokedex.has(pokemonName)

    //const pokemon = await state.pokeapi.fetchPokemon(pokemonName);
    //console.log(pokemon.base_experience);



    if (pokemonName in state.pokedex) {

        const pokemon = state.pokedex[pokemonName];

        const hpStat = pokemon.stats.find(s => s.stat.name === "hp");

        console.log(`Name: ${pokemon.name}`);
        console.log(`Height: ${pokemon.height}`);
        console.log(`Weight: ${pokemon.weight}`);
        console.log("Stats:");
        for (const stat of pokemon.stats) {
            console.log(`  - ${stat.stat.name}: ${stat.base_stat}`);
        }

        console.log("Types:");
        for (const type of pokemon.types) {
            console.log(`  - ${type.type.name}`);
        }
    } else {
        console.log(`you have not caught that pokemon`)
    }


    /*if (pokemon.base_experience > Math.random()*200) {
        console.log(`${pokemonName} escaped!`)
    } else {
        console.log(`${pokemonName} was caught!`)
        state.pokedex[pokemon.name]=pokemon;
    }*/

}