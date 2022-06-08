const User = require("../../models/User.model");
const jwt = require("jsonwebtoken");
require("../../models/Role.model");
exports.signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const existUser = await User.findOne({ where: { email: email } });
    if (existUser) {
      return res.status(400).json({
        message: "User Already Existed",
      });
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      RoleId: 1,
    });
    if (user) {
      return res.status(201).json({
        message: "Admin created Successfully..!",
        user: user,
      });
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

exports.signIn = (req, res) => {
  User.findOne({ email: req.body.email })
    .populate("role")
    .exec(async (error, user) => {
      if (error) return res.status(400).json(error);
      if (user) {
        const isPassword = await user.authenticate(req.body.password);
        if (isPassword) {
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );

          res.status(200).json({
            message: "Login Successfully",
            token,
            role: user.role,
          });
        } else {
          return res.status(400).json({
            token: "",
            user: "",
            message: "Invalid Password",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    });
};
