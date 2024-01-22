const router = require("express").Router();

const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth");

router.post("/users", auth.hashPassword, userController.add);
router.post("/users/login", userController.login);
router.get("/users/me", auth.isAuth, userController.getCurrentUser);
router.get("/users/logout", auth.isAuth, userController.logout);

module.exports = router;
