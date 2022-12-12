type HashLen = 32 | 16;

export function hash32(length: HashLen = 32) {
  if (length !== 16 && length !== 32)
    throw new RangeError("Only 32-bit or 16-bit is supported");
  let currentTime = new Date().getTime();
  return (
    "undefined" != typeof performance &&
      "function" == typeof performance.now &&
      (currentTime += performance.now()),
    "xxxxxxxxyyyyyyyy"
      .padEnd(length, "xxxxxxxxyyyyyyyy")
      .replace(/[xy]/g, function (character) {
        var randFactor = (currentTime + 16 * Math.random()) % 16 | 0;
        return (
          (currentTime = Math.floor(currentTime / 16)),
          ("x" === character ? randFactor : (3 & randFactor) | 8).toString(16)
        );
      })
  );
}
