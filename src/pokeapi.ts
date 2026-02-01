import { Cache } from "./pokecache.js"

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private obiektCache = new Cache(17050);

  constructor() {
    
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {

    

    const url = pageURL ? pageURL : `${PokeAPI.baseURL}/location-area`;

    let data;
    let response;
    let cache = this.obiektCache.get(url);

    if (cache) {
      data = cache;
    } else {
      response = await fetch(url);
      data = await response.json();
      this.obiektCache.add(url, data);
    }

    

    return data

  }

  async fetchLocation(locationName: string): Promise<Location> {
    // implement this
    throw new Error("Not implemented yet");
  }
}

export type ShallowLocations = {
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  // add properties here
};