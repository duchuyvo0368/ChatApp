import {getMessage,addMessage} from '../controllers/messages.controller.js'
import express from "express";

const router = express.Router();


//messages
router.post( "/getmessages/",getMessage);
router.post("/addmessages/",addMessage);

export default router