// const multer = require("multer");
// const path = require("path");
// const upload = multer({ dest: "uploads/" });

// const storage = multer.diskStorage({
//   destination: path.join(__dirname, "../../public/upload"),
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}.${Math.random()}.${file.originalname}`);
//   },
// });

// const filefilter = (req, file, cb) => {
//   const types = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
//   if (types.includes(files.mimetpe)) cb(null, true);
//   else {
//     cb(null, false);
//     cb(new error("file type is not valid"));
//   }
// };
