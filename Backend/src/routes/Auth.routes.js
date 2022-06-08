const { signUp, signIn } = require("../controller/Auth.controller");

const router = require("express").Router();

router.post("/auth/signUp", signUp);
router.post("/auth/signIn", signIn);

module.exports = router;
