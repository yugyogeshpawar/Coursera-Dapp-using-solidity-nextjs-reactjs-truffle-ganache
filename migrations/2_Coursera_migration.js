const CourseraMigration = artifacts.require("Coursera");

module.exports = function (deployer) {
  deployer.deploy(CourseraMigration);
};
