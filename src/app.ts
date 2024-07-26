import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/route";
import httpStatus from "http-status";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", router);

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: 'Not Found',
      errorMessages: [
        {
          path: req.originalUrl,
          message: 'API not found',
        },
      ],
    })
    next()
  })

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World!");
// });

// app.post("/", (req: Request, res: Response) => {
//   console.log(req.body);
//   res.json({
//     message: "Successfully received data",
//   });
// });

export default app;
