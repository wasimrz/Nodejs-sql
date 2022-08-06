const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const UserProfile = sequelize.define("userProfile", {
  // Model attributes are defined here
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = UserProfile;
