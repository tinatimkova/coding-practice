// Make me a window. I'll give you a number (N). You return a window.

// Rules:

//The window will always be 2 x 2.

// The window needs to have N number of periods across and N number of periods vertically in each pane.

// Example:

// N = 3

// ---------
// |...|...|
// |...|...|
// |...|...|
// |---+---|
// |...|...|
// |...|...|
// |...|...|
// ---------

function makeAWindow(num) {
    const side = `|${'.'.repeat(num)}|${'.'.repeat(num)}|\n`.repeat(num)
    const center = `|${'-'.repeat(num)}+${'-'.repeat(num)}|\n`
    return '-'.repeat(num*2 + 3) + '\n' + side + center + side + '-'.repeat(num*2 + 3) 
}