//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.matrix = string.split("\n").map((line) => line.split(" ").map((char) => Number(char)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((column, index) => this.matrix.map(row => row[index]));
  }
}

