export default {
  v1: jest.fn().mockImplementation(function () {
    return Math.random();
  })
};