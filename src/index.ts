export function hash32() {
  var currentTime = new Date().getTime();
  return (
    "undefined" != typeof performance &&
      "function" == typeof performance.now &&
      (currentTime += performance.now()),
    "xxxxxxxxyyyyyyyyxxxxxxxxyyyyyyyy".replace(/[xy]/g, function (character) {
      var randFactor = (currentTime + 16 * Math.random()) % 16 | 0;
      return (
        (currentTime = Math.floor(currentTime / 16)),
        ("x" === character ? randFactor : (3 & randFactor) | 8).toString(16)
      );
    })
  );
}