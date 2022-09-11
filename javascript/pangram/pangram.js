//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let pangramCountn = 97;

export const isPangram = (str) => {
  
  let noSpaceStr = str.toLowerCase().split('');
  let splitSrt = noSpaceStr.filter(e => e === ' ' ? false : true);
  let numberStr = splitSrt.map(e => e.charCodeAt(0))


  for (let index = 0; index < 26; index++) {
    if (!numberStr.includes(pangramCountn + index)) {
      return false
    }
  }

  return true
};
