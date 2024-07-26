import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import { config } from "dotenv";

const PORT = process.env.PORT || 5000;

let server: Server;
const MONGODB_URI =
  "mongodb+srv://kormobazaar:kormobazaar@cluster0.5xecsyp.mongodb.net/kormo-bazaar?retryWrites=true&w=majority";

async function bootstrap() {
  await mongoose.connect(MONGODB_URI);

  server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

bootstrap();
