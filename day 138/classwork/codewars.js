function palindrome(num) {
    if (!Number.isInteger(num) || num < 0) return "Not valid";
  
    const str = String(num);
    const palindromes = new Set();
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 2; j <= str.length; j++) {
        const substr = str.slice(i, j);
        if (substr === [...substr].reverse().join('')) {
          palindromes.add(substr);
        }
      }
    }
  
    return palindromes.size;
  }
  