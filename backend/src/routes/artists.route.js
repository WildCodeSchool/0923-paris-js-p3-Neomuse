const router = require("express").Router();

const artistController = require("../controllers/artist.controller");

router.post("/artists", artistController.insert);
router.get("/artists", artistController.findAll);
router.get("/artists/:id", artistController.findById);
router.get("/artists", artistController.findByName);

module.exports = router;
