import { config } from "dotenv";
config();

export default {
    mongodbURL: process.env.MONGOBD_URI,
}

