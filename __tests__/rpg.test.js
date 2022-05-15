import { Character } from "../src/rpg";
import { Villain } from "../src/rpg";
import { Friend } from "../src/rpg";

describe('Character', () => {
  let newCharacter;
  beforeEach(() => {
    newCharacter = new Character(5,5,5,5);
  });

  test('it should create a main character object with 5 character properties', () => {
    
    expect(newCharacter.intelligence).toEqual(5);
    expect(newCharacter.charm).toEqual(5);
    expect(newCharacter.risk).toEqual(5);
    expect(newCharacter.resilience).toEqual(5);
    expect(newCharacter.health).toEqual(100);
  });

  test('reduce the character health by 5 points', () => {
    newCharacter.reduceHealth(5);
    expect(newCharacter.health).toEqual(95);
    console.log(newCharacter.health);
  });
  
});

// describe('charmAttack', () => {
//   beforEach(() => {
//     charmAttack.newCharacter();
//   });
//     //charm attack
//     test('should reduce resilience of Villain object if charm value is above a threshold', () => {
//       //whatever number charm is the attack reduces the resilience of villain by that number
//       expect(charmAttack.newCharacter(number)) {
//         Villain.resilience -= number
//       }
//     })

// });

// // describe("calculatePlanetAges", () => {
// //   //     beforeEach(() => {
// //   //       ageCalculation.calculatePlanetAges();
// //   //     });
// //   //     test("should correctly calculate solar age on mercury", () => {
// //   //       expect(ageCalculation.planets["mercury"].solarAge).toEqual(125.00);
// //   //     });

// /*  test('newCharacter should gain 1 friend', () => {
//       expect(myFriends()).toEqual([]);
//   });

//   //newCharacter.prototype.makeFriend(function() {
//   //  this.friends=[friend];
// });*/

// describe('Villain', () => {
//   test('it should create a Villain character with 4 character properties', () => {
//     const villain = new Villain (4, 4, 4, 4);
//     expect(villain.cunning).toEqual(4);
//     expect(villain.snark).toEqual(4);
//     expect(villain.deceit).toEqual(4);
//     expect(villain.resilience).toEqual(4);
//   });
// });

// describe('Friend', () => {
//   test('it should create a Friend character with 4 properties', () => {
//     const friend = new Friend (6, 6, 6, 6);
//     expect(friend.help).toEqual(6);
//     expect(friend.gullibility).toEqual(6);
//     expect(friend.trustworthiness).toEqual(6);
//     expect(friend.resilience).toEqual(6);
// //   });
// });