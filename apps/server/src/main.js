import "dotenv/config";
import express from "express";
import { httpExceptionHandler } from "./middlewares/http-exception-handler";
import postsController from "./posts/posts.controller";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello",
  });
});

app.use("/posts", postsController);

app.all("*", (req, res) => {
  return res.status(404).json({ error: "Not Found" });
});

app.use(httpExceptionHandler);

app.listen(8000, () => {
  console.log("App is running at port: 8000");
});
