const router = require("express").Router();

const artistController = require("../controllers/artist.controller");
const isAdminCheck = require("../middlewares/auth");

router.post("/artists", isAdminCheck.isAdmin, artistController.insert);
router.get("/artists", artistController.findAll);
router.get("/artists/:id", artistController.findById);
router.get("/artists", artistController.findByName);
router.delete("/artists/:id", isAdminCheck.isAdmin, artistController.deleteart);
router.put(
  "/artists/:id",

  artistController.updateArtist
);

module.exports = router;
