function arrayFiltering(array, test) {
    let filteredArray = [];
    for (let element of array) {
        if (test(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = arrayFiltering(numbers, isEven);
