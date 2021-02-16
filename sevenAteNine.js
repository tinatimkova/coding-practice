/*
A number can eat the number to the right of it if it's smaller than itself. After eating that number, it becomes the sum of itself and that number. Your job is to create a function that returns the final array after the leftmost element has finished "eating".

EXAMPLES:

[5, 3, 7] ➞ [8, 7] ➞ [15]
// 5 eats 3 to become 8
// 8 eats 7 to become 15

[5, 3, 9] ➞ [8, 9]
// 5 eats 3 to become 8
// 8 cannot eat 9, since 8 < 9

nomNom([1, 2, 3]) ➞ [1, 2, 3]
nomNom([2, 1, 3]) ➞ [3, 3]
nomNom([8, 5, 9]) ➞ [22]

YOUR TASK:
Make all test cases pass successfully
NOTE:
Test input contains only an array of numbers. 
cntrl + enter to run tests
*/

function nomNom(arr) {
    // TODO:  Implement this function
    const newArr = arr.reduce(function(acc, nextNum, i, arr) {
    if (acc.length > 0 && acc[acc.length-1] > nextNum) {
        acc[acc.length-1] += nextNum
    } else {
        acc.push(nextNum)
    }
    return acc
    }, [])
    return newArr
  }
  
  // Test Specs
  mocha.setup('bdd');
  var expect = chai.expect;
  describe('Nom Nom', function() {
    it('1 cannot eat 2, so numbers remain uneaten.', function() {
      expect(nomNom([1, 2, 3])).to.deep.equal([1, 2, 3])
    })
    it('1 cannot eat 2, so 1 remains, but 2 can eat 1', function() {
      expect(nomNom([1, 2, 1])).to.deep.equal([1, 3])
    })
    it('2 can eat 1 to become 3. 3 cannot eat 3.', function() {
      expect(nomNom([2, 1, 3])).to.deep.equal([3, 3])
    })
    it('8 eats 5 to become 13, 13 eats 9 to become 22.', function() {
      expect(nomNom([8, 5, 9])).to.deep.equal([22])
    })
    it('5 eats 3 to become 8. 8 eats 7 to become 15.', function() {
      expect(nomNom([5, 3, 7])).to.deep.equal([15])
    })
    it('5 eats 3 to become 8. 8 cannot eat 9.', function() {
      expect(nomNom([5, 3, 9])).to.deep.equal([8, 9])
    })
    it('6 eats 5 to become 11. 11 eats 7 to become 17. 17 cannot eat 100.', function() {
      expect(nomNom([6, 5, 6, 100])).to.deep.equal([17, 100])
    })
  });
  mocha.run();