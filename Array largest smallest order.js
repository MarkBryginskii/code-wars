// Sort arr in order like:
// [first_largest, first_smallest, second_largest, second_smallest, ...]

function meanderingArray(unsorted) {
  const sorted = unsorted.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < sorted.length / 2; i++) {
    result.push(sorted[i]);
    if (i !== sorted.length - 1 - i) {
      result.push(sorted[sorted.length - 1 - i]);
    }
  }
  console.log(result);
  return result;
}

meanderingArray([-1, 1, 2, 3, -5]); // [ -5, 3, -1, 2, 1 ]
