function truncate(str, maxLength, suffix="...") {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - suffix.length) + suffix;
  } else {
    return str;
  }
}
