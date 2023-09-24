var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("ok");
});

// /test url route
app.get("/test", function (req, res) {
  const response = {
    status: 200,
    message: "ok",
  };
  res.json(response);
});

// /time url route
app.get("/time", function (req, res) {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const response = {
    status: 200,
    message: currentTime,
  };
  res.json(response);
});

app.listen(3200);
