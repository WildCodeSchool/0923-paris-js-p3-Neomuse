const router = require("express").Router();
const fileUpload = require("../middlewares/fileUpload");

const artworkController = require("../controllers/artworks.controller");

router.post("/artworks", fileUpload.any(), artworkController.insert);
router.get("/artworks", artworkController.getALL);
router.get("/artworks/artists/:id", artworkController.findAllByArtist);
router.get("/artworks/:id", artworkController.getById);
router.get("/technic", artworkController.getTechAll);
router.get("/artworkbytech", artworkController.getBytech);

module.exports = router;
