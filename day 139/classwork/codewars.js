function isAsciiLetter(char) {
    return typeof char === 'string' &&
           char.length === 1 &&
           /^[A-Za-z]$/.test(char);
  }
  