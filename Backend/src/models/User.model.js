const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");
// const bcrypt = require("bcrypt");

const userSchema = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: { type: DataTypes.STRING },
});

// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 10);
// });

// userSchema.virtual("fullName").get(function () {
//   return `${this.firstName} ${this.lastName}`;
// });

// userSchema.methods = {
//   authenticate: async function (password) {
//     return await bcrypt.compare(password, this.password);
//   },
// };

module.exports = userSchema;
