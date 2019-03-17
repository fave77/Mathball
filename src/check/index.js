module.exports = arg => {
  return require(`../${arg}`).check;
};