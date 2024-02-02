const router = require("express").Router();
const fileUpload = require("../middlewares/fileUpload");
const artistController = require("../controllers/artist.controller");
const isAdminCheck = require("../middlewares/auth");

router.post(
  "/artists",
  fileUpload.any(),
  isAdminCheck.isAdmin,
  artistController.insert
);
router.get("/artists", artistController.findAll);
router.get("/artists/:id", artistController.findById);
router.get("/artists", artistController.findByName);
router.delete("/artists/:id", isAdminCheck.isAdmin, artistController.deleteart);
router.put(
  "/artists/:id",

  artistController.updateArtist
);

module.exports = router;
