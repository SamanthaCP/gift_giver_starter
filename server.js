const express = require("express");
const morgan = require("morgan");
const votingRouter = require("./routes/voting"); //automatically finds js files

const app = express();

app.use(morgan("tiny")); //allows you to choose how it logs (parameter)
app.use("/voting", votingRouter);

// this is how you start your server...
// this is "/" route...
app.get("/", (req, res, next) => {
    res.status(200).json({ping: "pong"});
});

// this is "/hey" route...
app.get("/hey", (req, res, next) => {
    res.status(200).json({hi: "hello"});
});

const port = 3000;

app.listen(port, () => {
    console.log(`🚀 Server listening on port ` + port);
});