const router = require("express").Router();

const userController = require("../controllers/users.controller");
const auth = require("../middlewares/auth");

router.post("/user/:id", auth.hashPassword, userController.add);
router.post("/login", userController.login);
router.get("/user", auth.isAuth, userController.getAll);

module.exports = router;
