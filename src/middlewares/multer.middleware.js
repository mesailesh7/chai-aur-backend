import multer from "multer";

const storage = multer.diskStorage({
  // in request you get json data from the body
  // in file: file is the file you want to upload or save
  // cb is callback
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
