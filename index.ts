import express from 'express';
import messagesRouter from "./routers/messages";
import mainMessageFile from "./files/fileMessages";
const app = express();
const port = 3000;
app.use(express.json());
app.use('/messages', messagesRouter);

const run = async () => {
    await mainMessageFile.readFile();

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
}
run().catch(console.error);