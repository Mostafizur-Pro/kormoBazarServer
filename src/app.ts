import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/route";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', router)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  // res.send('got data')
  res.json({
    message: "Successfully received data",
  });
});

export default app;
