import { createInterface } from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { PokeAPI } from "./pokeapi.js";
function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays a 20 entries",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays previous 20 location areas",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "List of all the Pokémon in a given area",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Catch the Pokémon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspect the Pokémon",
            callback: commandInspect,
        },
    };
}
export function initState() {
    const commands = getCommands();
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    const nextLocationsURL = null;
    const prevLocationsURL = null;
    const pokeapi = new PokeAPI();
    const pokedex = {};
    return { rl, commands, nextLocationsURL, prevLocationsURL, pokeapi, pokedex };
}
