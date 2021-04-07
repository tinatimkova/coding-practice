const longestCommonPrefix = function(strs) {
    let commonPrefix = ''
    // sort the array in alphabetical order
    const sortedArr = strs.sort()
    // check if the first element in the array is a word
    // check if the array is not empty
    if (!/^[a-zA-Z]+/.test(strs[0]) || strs.length == 0) {
      return commonPrefix
    } else if (strs.length === 1) {
    // if the length of the given array equals 1, we return the first element
      return strs[0]
    }
    let i = 0
    // Compare the characters in the first and last strings in the array
      while (sortedArr[0][i] ===  sortedArr[sortedArr.length-1][i] && i < sortedArr[0].length) {
        commonPrefix += sortedArr[sortedArr.length-1][i]
        i++
      }
    return commonPrefix
  };