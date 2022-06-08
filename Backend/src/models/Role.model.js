const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const roleSchema = sequelize.define("Role", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = roleSchema;
