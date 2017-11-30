"use strict";

const { Router } = require("express");
const router = Router();
const { uploadFileFromWeb } = require("../controllers/uploadCtrl.js");

router.post("/uploadfile", uploadFileFromWeb);

module.exports = router;