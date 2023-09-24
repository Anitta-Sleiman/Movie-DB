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
    //it creates a Date object representing the current date and time and then formats it as a time string.
    //[] locale parameter and the next parameter is what formats the time as required

    hour: "2-digit",
    //hour part of the time is displayed using two digits
    minute: "2-digit",
    //minute part of the time is displayed using two digits
    hour12: false,
    //using 24 time-format
  });
  const response = {
    status: 200,
    message: currentTime,
  };
  res.json(response);
});

// /hello/:id route
app.get("/hello/:id?", function (req, res) {
  const id = req.params.id; //extract the value of the request parameter in the URL and assigns it to id
  let message = "Hello";

  if (id) {
    // passed an id value, it will be added to the message
    message += `, ${id}`;
  }

  const response = {
    status: 200,
    message: message,
  };
  res.json(response);
});

// /search?s= route
app.get("/search", function (req, res) {
  const search = req.query.s; //extract the value of the query parameter in the URL and assigns it to search

  if (search) {
    const response = {
      status: 200,
      message: "ok",
      data: search,
    };
    res.status(200).json(response); //explicitly set the HTTP status code to 200 meaning a successful response
  } else {
    const response = {
      status: 500,
      error: true,
      message: "You have to provide a search",
    };
    res.status(500).json(response); //explicitly set the HTTP status code to 500 meaning server-side error
  }
});

// list of movies
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];

// /movies/create
app.get("/movies/create", function (req, res) {
  res.send("Create Movie");
});

// /movies/read
app.get("/movies/read", function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const response = {
    status: 200,
    data: movies,
  };
  res.json(response);
});

// /movies/read/by-date
app.get("/movies/read/by-date", function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const response = {
    status: 200,
    data: movies.sort((a, b) => a.year - b.year),
  };
  res.json(response);
});

// /movies/read/by-rating
app.get("/movies/read/by-rating", function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const response = {
    status: 200,
    data: movies.sort((a, b) => b.rating - a.rating),
  };
  res.json(response);
});

// /movies/read/by-title
app.get("/movies/read/by-title", function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const response = {
    status: 200,
    data: movies.sort((a, b) => a.title.localeCompare(b.title)),
  };
  res.json(response);
});

// /movies/update
app.get("/movies/update", function (req, res) {
  res.send("Update Movie");
});

// /movies/delete
app.get("/movies/delete", function (req, res) {
  res.send("Delete Movie");
});

app.listen(3200);
