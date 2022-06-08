const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
sequelize
  .authenticate()
  .then(() => {
    sequelize.sync();
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
module.exports = sequelize;
