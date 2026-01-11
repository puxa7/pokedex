export function cleanInput(text: string): string[] {
  return text
    .toLowerCase()         // Zamiana na małe litery (np. "Pikachu" -> "pikachu")
    .trim()                // Usunięcie spacji z początku i końca
    .split(/\s+/);         // Rozbicie na tablicę według spacji (obsługuje też wiele spacji)
}


const input = "  Hello World  ";
const cleaned = cleanInput(input);
console.log(cleaned); 
// Powinno wypisać: ["hello", "world"]