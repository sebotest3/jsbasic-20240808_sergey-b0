function ucFirst(str) {
  if (str.length === 0) {
    return '';
  } else if (str.length === 1) {
    return str.toUpperCase();
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
