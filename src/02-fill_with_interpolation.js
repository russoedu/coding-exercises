// find and fill the missing values on the points representing time and "value"
// use a linear interpolation

// input [[0, 5], [5, 10], [15, 30], [30, 45]]
// output [[0, 5], [5, 10], [10, 20], [15, 30], [20, 35], [25, 40], [30, 45]]

function fillIntermediate(input) {
  let previousPoint = input[0];
  let currentPoint = input[1];
  const timeStep = 5;
  const output = [];

  const TIME = 0;
  const VALUE = 1;

  let i = 1;
  output.push(previousPoint);

  while (typeof currentPoint !== "undefined") {
    let expectedTime = previousPoint[TIME] + timeStep;

    if (expectedTime < currentPoint[TIME]) {
      // slope = (y2 - y1)/(x2 - x1).
      // y = slope * x + b
      const slope =
        (currentPoint[VALUE] - previousPoint[VALUE]) /
        (currentPoint[TIME] - previousPoint[TIME]);
      const b = previousPoint[VALUE] / slope - previousPoint[TIME];
      const iterations = (currentPoint[TIME] - expectedTime) / timeStep;

      for (let j = 0; j < iterations; j++) {
        const midTime = previousPoint[TIME] + (j + 1) * timeStep;
        const midValue = midTime * slope + b;

        output.push([midTime, midValue]);
      }
    }

    output.push(currentPoint);
    i += 1;
    previousPoint = currentPoint;
    currentPoint = input[i];
  }
  console.log(output);
  return output;
}

const input = [[0, 5], [5, 10], [15, 30], [30, 45]];
fillIntermediate(input);
