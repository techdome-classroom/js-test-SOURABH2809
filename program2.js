const decodeTheRing = function (x, y) {
  if (x.length === 0 && y.length === 0) {
    return true;
  }

  if (x.length === 0 || y.length === 0) {
    return false;
  }

  if (y[0] === x[0] || y[0] === "?") {
    return decodeTheRing(x.slice(1), y.slice(1));
  } else if (y[0] === "*") {
    return decodeTheRing(x, y.slice(1)) || decodeTheRing(x.slice(1), y);
  } else {
    return false;
  }
};

module.exports = decodeTheRing;
