function managerEntries(entry = []) {
  return [...entry, require.resolve('./manager')];
}

module.exports = {
  managerEntries,
};
