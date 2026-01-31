export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const url = pageURL
            ? pageURL
            : `${PokeAPI.baseURL}/location-area`;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    async fetchLocation(locationName) {
        // implement this
        throw new Error("Not implemented yet");
    }
}
