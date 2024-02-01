const router = require("express").Router();
const fileUpload = require("../middlewares/fileUpload");

const artistController = require("../controllers/artist.controller");

router.post("/artists", fileUpload.any(), artistController.insert);
router.get("/artists", artistController.findAll);
router.get("/artists/:id", artistController.findById);
router.get("/artists", artistController.findByName);

module.exports = router;
