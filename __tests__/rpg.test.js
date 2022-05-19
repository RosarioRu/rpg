import { Character } from "../src/rpg";

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
    console.log("health after reduction: " + newCharacter.health);
  });

  test('increases the character health by 5 points', () => {
    newCharacter.increaseHealth(5);
    expect(newCharacter.health).toEqual(105);
    console.log("health is now: " + newCharacter.health);
  });

  
  // test('it should increase or decrease health by 10pts depending on randomly generated numberer', () => {
  //   let testCharacter = new Character(5,5,5,5);
  //   testCharacter.rollHealth();
  //   expect(testCharacter.health).not.toEqual(newCharacter.health);
  //   console.log("testCharacter's health: "+ testCharacter.health + "newCharacter's health: " + newCharacter.health);
  //   });

  test('it should increase health by 10pts', () => {
  newCharacter.rollHealth(12);
  expect(newCharacter.health).toEqual(110);
  });

  test('it should decrease health by 10pts', () => {
    newCharacter.rollHealth(5);
    expect(newCharacter.health).toEqual(90);
    });
  
  // expect.extend({
  //   toBeHighLow(received) {
  //     //a function we would create that would be able to look at two different outcomes
  //     //const randomNumReceived = received >= minNum && received <= maxNum;
  //     let randomReceivedHigh = received >= 10;
  //     let randomReceivedLow = received < 10;
  //     if(randomReceivedHigh) {
  //       return {
  //         pass: true,
  //       };
  //     } else if (randomReceivedLow) {
  //       return {
  //         pass: false,
  //       };
  //     }
  //   },
  // });

  //   test('it should increase or decrease health by 10pts depending on randomly generated numberer', () => {
  //   newCharacter.randomAttack();
  //   expect(newCharacter.health).toBeWithinRange(90, 110);
  // });

  // test('random number should increase or decrease health by 10 points', () => {
  //   newCharacter.rollHealth();
  //  // expect(newCharacter.health).toEqual(110);
  //   expect(newCharacter.health).toEqual(90);
  // });

  expect.extend({
    runTillBothHappen(functionToRun) {
      let firstPossibility = false; 
      let secondPossibility = false;       
      let bothTrue = false;
      while (bothTrue = false) {
        functionToRun;
        if (functionToRun === 110) {
          firstPossibility = true;
          if (firstPossibility === secondPossibility) {
            bothTrue = true;
            pass: true;
          }
        } else {
          secondPossibility = true;
          if (firstPossibility === secondPossibility) {
            bothTrue = true;
            pass: true;
          }
        }
        return pass;
      };
    }
  });
  
  
  test('it should return pass if both things happen', () => {
    newCharacter.randomAttack();
    expect(newCharacter.randomAttack()).runTillBothHappen();
    });


      

      
      // functionToRun;
      // if (functionToRun === 110) {
      //   firstPossibility = true;
      //   if (bothTrue = true) {
      //     return true;
      //   } else {
      //     //start again
      // } else {
      //   secondPossibility = true;

});

      


// });

// it('Should be true if age is larger than 18', () => {
//   if(age > 18)
//     {
//       expect(true).toBeTruthy();
//     }
// });


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
// 