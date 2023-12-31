import "./env";

import bodyParser from "body-parser";
import express from "express";
import ImageRouter from "./router/image/ImageRouter.router";
import AuthRouter from "./router/auth/AuthRouter.router";
import { HOSTNAME, PORT } from "./lib";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/img", ImageRouter);
app.use("/auth", AuthRouter);

app.get("*", (_req, res) => {
    res.status(404).send("Not available.")
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server started on http://${HOSTNAME}:${PORT}`)
})