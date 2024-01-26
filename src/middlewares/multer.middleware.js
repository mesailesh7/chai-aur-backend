import multer from "multer";

const storage = multer.diskStorage({
  // in request you get json data from the body
  // in file: file is the file you want to upload or save
  // cb is callback
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // file.originalname is what user uploads the file name with its gonna be saved as it is and .file has many properties can be checked in multer
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
