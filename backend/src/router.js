const router = require("express").Router();
const userRouter = require("./routes/users.route");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import routes here
const itemRouter = require("./routes/items.route");
const artistController = require("./controllers/artist.controller");

router.get("/artists", artistController.findAll);

// Apply routes
router.use(itemRouter);
router.use(userRouter);

/* ************************************************************************* */

module.exports = router;
