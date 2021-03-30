const romanToInt = function(s) {
    let number = 0
  
    const symbols = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
  
      for (let i=0; i < s.length; i++) {
        if (s[i] == 'I' && (s[i + 1] == 'V' || s[i + 1] == 'X')) {
           number -= symbols[s[i]]
        } else if (s[i] == 'X' && (s[i + 1] == 'L' || s[i + 1] == 'C')) {
           number -= symbols[s[i]]
       } else if (s[i] == 'C' && (s[i+1] == 'D' || s[i + 1] == 'M')) {
           number -= symbols[s[i]]
       } else {
         number += symbols[s[i]]
       }
      }
      return number
  };