const router = require("express").Router();

const artworkController = require("../controllers/artworks.controller");

router.post("/artworks", artworkController.create);
router.get("/artworks", artworkController.getALL);
router.get("/artworks/:id", artworkController.getById);
router.get("/technic", artworkController.getTechAll);
router.get("/artworkbytech", artworkController.getBytech);
router.get("/artist", artworkController.getArtistAll);

module.exports = router;
