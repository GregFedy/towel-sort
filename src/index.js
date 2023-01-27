// You should implement your task here.

module.exports = function towelSort(matrix) {
    // Check if no arguments were passed
    if (arguments.length === 0) {
        return [];
    }
    // Initialize an empty array to store the result
    let result = [];
    // Loop through each sub-array in the matrix
    for (let i = 0; i < matrix.length; i++) {
        // If the current sub-array is in an even position
        if (i % 2 === 0) {
            // Loop through each element in the sub-array
            for (let j = 0; j < matrix[i].length; j++) {
                // Add the element to the result array
                result.push(matrix[i][j]);
            }
        } else {
            // Loop through each element in the sub-array in reverse order
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                // Add the element to the result array
                result.push(matrix[i][j]);
            }
        }
    }
    // Return the final result
    return result;
};
