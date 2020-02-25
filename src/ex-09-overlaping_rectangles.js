class Rectangle {
  constructor(topLeft, bottomRight) {
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
    this.top = topLeft[1];
    this.left = topLeft[0];

    this.bottom = bottomRight[1];
    this.right = bottomRight[0];
    console.log(
      `top: ${this.top} | bottom:${this.bottom} | left: ${this.left} | right:${
        this.right
      }`
    );
  }
}

/**
 *
 * @param {rectangle} rectangle1
 * @param {rectangle} rectangle2
 */
function isOverlapping(rectangle1, rectangle2) {
  if (
    rectangle1.left > rectangle2.right || // R1 is right to R2
    rectangle1.right < rectangle2.left || // R1 is left to R2
    rectangle1.top < rectangle2.bottom || // R1 is above R2
    rectangle1.bottom > rectangle2.top // R1 is below R2
  ) {
    return false;
  }
  return true;
}

/*
10|   111111111
9 |   111111111
8 |   111111111
7 |   111111111 222222
6 |   111111111 222222
5 |   111111111 222222
4 |   111111111
3 |   111111111
2 |   111111111
1 |   111111111         
--|----------------------------------------------
0 | 0 1 2 3 4 5 6 7 8 9 10

*/
const rect1 = new Rectangle([1, 10], [5, 1]);
const rect2 = new Rectangle([6, 7], [8, 5]);
console.log(isOverlapping(rect1, rect2));
