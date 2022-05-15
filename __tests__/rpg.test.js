import { MainCharacter } from "../src/rpg";

describe('MainCharacter', () => {
  test('it should create a main character object with 4 character properties', () => {
    const mainCharacter = new MainCharacter(5, 5, 5, 5);
    expect(mainCharacter.intelligence).toEqual(5);
    expect(mainCharacter.charm).toEqual(5);
    expect(mainCharacter.risk).toEqual(5);
    expect(mainCharacter.resilience).toEqual(5);
  });
});

