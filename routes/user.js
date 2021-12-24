const express = require("express");
const router = express.Router();

const postUserCtrl = require("../controllers/postUser")
const putUserCtrl = require("../controllers/putUser.js")

router.put("/", putUserCtrl);
router.post("/", postUserCtrl);

module.exports = router;