const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Hospital = sequelize.define("hospital", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Hospital;
