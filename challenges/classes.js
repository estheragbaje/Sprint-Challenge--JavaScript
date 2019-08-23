// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height) {
//   this.length = length;
//   this.width = width;
//   this.height = height;
// }

// CuboidMaker.prototype.volume = function() {
//   let volume = this.length * this.width * this.height;
//   return volume;
// };

// CuboidMaker.prototype.surfaceArea = function() {
//   let surfaceArea =
//     2 *
//     (this.length * this.width +
//       this.length * this.height +
//       this.width * this.height);
//   return surfaceArea;
// };

//Refactoring into class syntax
class CuboidMaker2 {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    let volume = this.length * this.width * this.height;
    return volume;
  }

  surfaceArea() {
    let surfaceArea =
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height);
    return surfaceArea;
  }
}

const cuboid2 = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
  constructor(length, width, height) {
    super(length, width, height);
  }

  surfaceArea() {
    let surfaceArea = 6 * this.length * this.length;
    return surfaceArea;
  }
}

const cubeMaker = new CubeMaker(4, 4, 4);
// Testing the volume and surfaceArea methods of the CubeMakerby:
console.log(cubeMaker.volume());
console.log(cubeMaker.surfaceArea());
