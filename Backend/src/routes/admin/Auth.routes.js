const { signUp, signIn } = require("../../controller/admin/Auth.controller");

const router = require("express").Router();

router.post("/admin/auth/signUp", signUp);
router.post("/admin/auth/signIn", signIn);

module.exports = router;
