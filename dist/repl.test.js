import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";
// describe.each([
//     {
//         input: "  hello  world  ",
//         expected: ["hello", "world"],
//     },
//     {
//         input: "PIKACHU charizard",
//         expected: ["pikachu", "charizard"],
//     },
//     {
//         input: "  Bulbasaur  ",
//         expected: ["bulbasaur"],
//     }
//     // TODO: more test cases here
// ])("cleanInput($input)", ({ input, expected }) => {
//     test(`Expected: ${expected}`, () => {
//         // TODO: call cleanInput with the input here
//         // The `expect` and `toHaveLength` functions are from vitest
//         // they will fail the test if the condition is not met
//         expect(actual).toHaveLength(expected.length);
//         for (const i in expected) {
//             // likewise, the `toBe` function will fail the test if the values are not equal
//             expect(actual[i]).toBe(expected[i]);
//         }
//     });
// });
describe.each([
    {
        input: "   hello   world   ",
        expected: ["hello", "world"],
    },
    {
        input: "PIKACHU charizard",
        expected: ["pikachu", "charizard"],
    },
    {
        input: "  Bulbasaur  ",
        expected: ["bulbasaur"],
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        // TUTAJ MUSI BYĆ TA LINIA:
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
