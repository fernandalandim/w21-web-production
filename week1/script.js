function add (a, b) {
    return a + b
}
console.log(add(3,5))

function addArray (numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

const numbers = [1, 2, 3, 4, 5]

console.log(addArray(numbers))