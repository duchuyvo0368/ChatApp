const { addMessage, getMessages } = require("../controllers/messages.controller");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;
