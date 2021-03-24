// Finds all distinct subsets of a given set
// Runtime: O(2^n)

function findSubsets(n) {
    const array = Array.from(n)
    const base = ['']

    const result = array.reduce((acc, nextValue) => {
        const accPlusNextValue = acc.map(val => `${val}${nextValue}`)

        return acc.concat(accPlusNextValue)
    }, base)

    return result
}

findSubsets('a') //↪️ ['', 'a']
findSubsets([1, 'b']) //↪️ ['', '1', 'b', '1b']
findSubsets('abc') //↪️ ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']