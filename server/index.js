import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/users.js";

const app = express();

const CONNECTION_URL =
  "mongodb+srv://thiendonggtvt:kuti2710@cluster0.7bmip.mongodb.net/memories?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("APP IS RUNNING");
});

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err.message);
  });
