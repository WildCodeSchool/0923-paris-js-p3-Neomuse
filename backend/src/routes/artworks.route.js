const router = require("express").Router();
const fileUpload = require("../middlewares/fileUpload");

const artworkController = require("../controllers/artworks.controller");
const isAdminCheck = require("../middlewares/auth");

router.post(
  "/artworks",
  fileUpload.any(),
  isAdminCheck.isAdmin,
  artworkController.insert
);
router.get("/artworks", artworkController.getALL);
router.get("/artworks/artists/:id", artworkController.findAllByArtist);
router.get("/artworks/:id", artworkController.getById);
router.get("/technic", artworkController.getTechAll);
router.get("/artworkbytech", artworkController.getBytech);
router.delete(
  "/artworks/:id",
  isAdminCheck.isAdmin,
  artworkController.deleteart
);
router.put(
  "/artworks/:id",
  isAdminCheck.isAdmin,
  artworkController.updateArtwork
);

module.exports = router;
