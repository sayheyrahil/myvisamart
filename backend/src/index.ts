import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import http from "http";
import log4js from "log4js";
import cors from "cors";
import indexRouter from "@routes/index-router";
import fileRouter from "@routes/file-router";
import baseRouter from "@routes/base-router";
import adminRouter from "@routes/admin-router";
import morgan from "morgan";




import '@models/associations';
import "@models/async";
import userRouter from "@routes/user-router";

import { decryptBody, encryptJsonResponse } from "@middleware/crypto-middleware"; // <-- Add this

morgan("tiny");
morgan(":method :url :status :res[content-length] - :response-time ms");
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use("/uploads", express.static("uploads"));

log4js.configure({
  appenders: {
    everything: {
      type: "dateFile",
      filename: "./logger/all-the-logs.log",
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
  },
  categories: {
    default: { appenders: ["everything"], level: "debug" },
  },
});

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Use this after the variable declaration

app.use("/api", fileRouter); // File upload routes (should be before text middleware)

// Only apply express.text to routes after fileRouter
app.use(express.text({ type: "*/*" }));
app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({ limit: '1000mb', extended: true }));

app.get("/juhi", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.use("/api", indexRouter);

app.use(decryptBody);
app.use(encryptJsonResponse);
//  app.use("/api/admin", baseRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

// Apply decryption and encryption middleware only AFTER routers that need raw body (like fileRouter)

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
