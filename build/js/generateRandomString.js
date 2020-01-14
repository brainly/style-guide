var generateRandomString = function generateRandomString() {
  return Math.random().toString(32).slice(2);
};

export default generateRandomString;