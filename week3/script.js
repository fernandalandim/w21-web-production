const counters = [
    {
        index: 0,
        name: 'Crane',
        count: 7
    },
    {
        index: 1,
        name: 'Rosa',
        count: 5
    },
    {
        index: 2,
        name: 'Bartlett',
        count: 8
    },
    {
        index: 3,
        name: 'Fuller',
        count: 4
    },
    {
        index: 4,
        name: 'Mendez',
        count: 9
    },
    {
        index: 5,
        name: 'Judy',
        count: 2
    },
    {
        index: 6,
        name: 'Huffman',
        count: 3
    },
    {
        index: 7,
        name: 'Theresa',
        count: 5
    },
    {
        index: 8,
        name: 'Janna',
        count: 2
    },
    {
        index: 9,
        name: 'Sabrina',
        count: 4
    }
]

function list(counters) {
    return counters.map(
        counter => `${counter.name} counted ${counter.count} items`
    ).join('\n')
}

console.log(list(counters))

function search(counters, query) {
    return counters.filter(
        counter => counter.name.includes(query)
    )
}

console.log(search(counters, "J"))

function total (counters) {
    return counters.reduce(
        // Counter is the object. Count is the number.
        ((sum, counter) => sum + counter.count), 0
    )
}

console.log(total(counters))

// Sort items by property (index, name, count)
function order(counter, property) {
    return counters.sort(
        // (a, b) => a - b
        // a, b === two items from the array
        // a should come before b then return -1 or < 0
        // b should come before a then return 1 or > 0
        // no change then return 0

        (a, b) => {
            if (a[property] < b[property]) {
                return -1
            } else if (a[property] > b[property]) {
                return 1
            } else {
                return 0
            }
        }
    )
}

console.log(order(counters, "count"));