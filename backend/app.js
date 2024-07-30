const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./utils/config.js");
const logger = require("./utils/logger.js");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blogs.js");
const middleware = require("./utils/middleware.js");
const userRouter = require("./controllers/users.js");
const loginRouter = require("./controllers/login.js");

mongoose.set("strictQuery", false);
mongoose
  .connect(config.MONGODB_URI)
  .then(logger.info("connected"))
  .catch((error) =>
    logger.error("failed to connect to mongoDB", error)
  );

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.tokenExtractor);
app.use("/api/login", loginRouter);
app.use("/api/blogs", middleware.userExtractor, blogsRouter);
app.use("/api/users", userRouter);
app.use(middleware.unknownEndpoint);
app.use((err, req, res, next) => {
  logger.logger.error(err.stack);
  res.status(500).send("Something went wrong!");
});
app.use(middleware.errorHandler);

module.exports = app;
