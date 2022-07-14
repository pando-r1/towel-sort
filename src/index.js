
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let result = [];
    matrix.forEach((element, index) => {
      let temp = [];
      for (let number of element) {
        temp.push(number);
      }
      index % 2 === 0 ? result.push(...temp):result.push(...temp.reverse())
    });
  return result;
}