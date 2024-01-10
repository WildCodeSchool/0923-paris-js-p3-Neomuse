const router = require("express").Router();

const userController = require("../controllers/user.controller.jsx");
const auth = require("../middlewares/auth");

router.post("/users", auth.hashPassword, userController.add);

module.exports = router;
