const router = require("express").Router();

const userController = require("../controllers/users.controller");
const auth = require("../middlewares/auth");

router.post("/users", auth.hashPassword, userController.add);
router.post("/users/login", userController.login);

module.exports = router;
