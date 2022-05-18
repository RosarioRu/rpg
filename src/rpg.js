export class Character {
  constructor (intelligence, charm, risk, resilience, health) {
    this.intelligence = intelligence;
    this.charm = charm;
    this.risk = risk;
    this.resilience = resilience;
    this.health = 100;
  }

  reduceHealth(number) {
    this.health = (this.health)-number;
  }

  increaseHealth(number) {
    this.health += number;
  }

  rollHealth(randomNumber) {
    // let roll = Math.floor(Math.random() * 20) + 1;
    if (randomNumber>= 10) {
      this.health += 10;
    } else {
      this.health -= 10;
    }
  }

  randomAttack() {
    let roll = Math.floor(Math.random() * 20) + 1;
    if (roll>= 10) {
      this.health += 10;
    } else {
      this.health -= 10;
    }
  }
  
}




/*  myfriends();
  //this.myFriends = [makeFriend()];
}

export class Villain {
  constructor (cunning, snark, deceit, resilience) {
    this.cunning = cunning;
    this.snark = snark;
    this.deceit = deceit;
    this.resilience = resilience;
  }
}

export class Friend {
  constructor (help, gullibility, trustworthiness, resilience) {
    this.help = help;
    this.gullibility = gullibility;
    this.trustworthiness = trustworthiness;
    this.resilience = resilience;
  }
}

/*class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  checkType() {
    //Function body goes here.
  }    
}*/