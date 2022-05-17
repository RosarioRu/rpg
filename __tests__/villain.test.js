import { Villain } from "../src/villain";


describe('Villain', () => {
  test('it should create a Villain character with 4 character properties', () => {
    const villain = new Villain (4, 4, 4, 4);
    expect(villain.cunning).toEqual(4);
    expect(villain.snark).toEqual(4);
    expect(villain.deceit).toEqual(4);
    expect(villain.resilience).toEqual(4);
  });


});