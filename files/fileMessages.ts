import {promises as fs} from 'fs';
import {MessageWithoutId,Message} from "./type";
const filename = './text.json';
let messages:Message[] = [];

const mainMessageFile = {
    async readFile() {
        try {
            const fileContents = await fs.readFile(filename);
            messages = JSON.parse(fileContents.toString());
        } catch (e) {
            messages = [];
        }
    },

    async getMessage() {
        return messages;
    },

    async addMessage(message:MessageWithoutId) {
        const id = crypto.randomUUID();
        const datetime = new Date().toISOString();
        const mess = {id,datetime,...message};
        messages.push(mess);
        await this.save();
        return mess;


    },
    async save() {
        return fs.writeFile(filename, JSON.stringify(messages));
    }


}

export default mainMessageFile