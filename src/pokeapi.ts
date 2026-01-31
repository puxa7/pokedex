export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() { }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {

    const url = pageURL
      ? pageURL
      : `${PokeAPI.baseURL}/location-area`;

    let response = await fetch(url);

    let data = await response.json();

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