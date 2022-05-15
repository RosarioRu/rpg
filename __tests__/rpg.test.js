import { MainCharacter } from "../src/rpg";
import { Villian } from "../src/rpg";

describe('MainCharacter', () => {
  test('it should create a main character object with 4 character properties', () => {
    const mainCharacter = new MainCharacter(5, 5, 5, 5);
    expect(mainCharacter.intelligence).toEqual(5);
    expect(mainCharacter.charm).toEqual(5);
    expect(mainCharacter.risk).toEqual(5);
    expect(mainCharacter.resilience).toEqual(5);
  });
});

describe('Villian', () => {
  test('it should create a villian character with 4 character properties', () => {
    const villian = new Villian (4, 4, 4, 4);
    expect(villian.cunning).toEqual(4);
    expect(villian.snark).toEqual(4);
    expect(villian.deceit).toEqual(4);
    expect(villian.resilience).toEqual(4);
  });
});