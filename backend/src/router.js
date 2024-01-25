const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import routes here
const itemRouter = require("./routes/items.route");
const userRouter = require("./routes/user.route");
const artworkRouter = require("./routes/artworks.route");
const favorisRouter = require("./routes/favoris.route");
// Apply routes
router.use(itemRouter);
router.use(userRouter);
router.use(artworkRouter);
router.use(favorisRouter);

/* ************************************************************************* */

module.exports = router;
