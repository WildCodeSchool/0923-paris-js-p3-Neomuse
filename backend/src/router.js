const router = require("express").Router();
const userRouter = require("./routes/users.route");

router.use(userRouter);

module.exports = router;
