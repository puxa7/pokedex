import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    obiektCache = new Cache(17050);
    constructor() {
    }
    async fetchLocations(pageURL) {
        const url = pageURL ? pageURL : `${PokeAPI.baseURL}/location-area`;
        let data;
        let response;
        let cache = this.obiektCache.get(url);
        if (cache) {
            data = cache;
        }
        else {
            response = await fetch(url);
            data = await response.json();
            this.obiektCache.add(url, data);
        }
        return data;
    }
    async fetchLocation(locationName) {
        // implement this
        throw new Error("Not implemented yet");
    }
}
