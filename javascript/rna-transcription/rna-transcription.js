//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const toRna = (arr) => {
  let rna = arr != null ? arr.split('').map(function (value, index, array) {
    if (value === 'G') {
      return 'C';
    }
    if (value === 'C') {
      return 'G';
    }
    if (value === 'T') {
      return 'A';
    }
    if (value === 'A') {
      return 'U';
    }
  }) : null;
  
  return rna.join("");
};
