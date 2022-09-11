//define de allergies score list
const ALLERGIES_MAP = {
'eggs' : 1,
'peanuts' : 2,
'shellfish' : 4,
'strawberries' : 8,
'tomatoes' : 16,
'chocolate' : 32,
'pollen' : 64,
'cats' : 128
};

const ALLERGIES = Object.keys(ALLERGIES_MAP);
export class Allergies {
  constructor(score) {
    this.score = score;
  }
  list() {
    
    return ALLERGIES.filter(this.allergicTo.bind(this));
  }
  allergicTo(allergent) {
    //compare in a bit level where score is equal to the alergent
    return Boolean(this.score & ALLERGIES_MAP[allergent]);
  }
}