const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/post", itemController.senddata);

module.exports = router;
