const router = require("express").Router();
const favorisController = require("../controllers/favoris.controller");
const { Auth } = require("../middlewares/auth");

router.get("/favoris", Auth, favorisController.getFavorites);
router.post("/favoris", Auth, favorisController.createFavorite);
router.delete("/favoris", Auth, favorisController.deleteFavorite);

module.exports = router;
