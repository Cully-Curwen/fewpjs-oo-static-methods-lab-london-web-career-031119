class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-\s]+/g, '');
  };

  static titleize(string) {
    const checks = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(/\s/).map( word => {
      if (checks.includes(word)) {
        return word;
      } else {
        return this.capitalize(word);
      };
    })
    words[0] = this.capitalize(words[0]);
    return words.join(' ');
  };
};