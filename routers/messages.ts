import express from "express";
import {MessageWithoutId} from "../files/type";
import mainMessageFile from "../files/fileMessages";
const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
    const messages = await mainMessageFile.getMessage()
    res.send(messages);
});

messagesRouter.post('/', async (req, res) => {
   const message:MessageWithoutId = {
        message:req.body.message,
    }
    const saveMessage = await mainMessageFile.addMessage(message)
    res.send(saveMessage);
});

export default messagesRouter