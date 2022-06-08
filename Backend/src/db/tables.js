const Role = require("../models/Role.model");
const Users = require("../models/User.model");

Role.hasOne(Users);
Users.belongsTo(Role);
