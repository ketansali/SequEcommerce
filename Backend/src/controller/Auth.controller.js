const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
require("../models/Role.model");
exports.signUp = (req, res) => {
  // User.findOne({ email: email }).exec((err, user) => {
  //   if (err) return res.status(400).json(err);
  //   console.log(user);
  // });
  const { firstName, lastName, email, password } = req.body;
  const user = User.create({ firstName, lastName, email, password, RoleId: 1 });
  user.save((err, user) => {
    if (err) return res.status(400).json(err);
    return res.status(201).json({
      message: "Signup Successfully",
      user: user,
    });
  });
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
