const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const router = require("./UserRoutes");

// app.get("/", (req, res) => {
//       res.send("<h1>hello express</h1>");
// });

// app.get("/about", (req, res) => {
//       res.send("<h1>About page</h1>");
// });

// app.get("/contact", (req, res) => {
//       res.send("<h1>Contact page</h1>");
// });

// app.get("/profile", (req, res) => {
//       res.send("<h1>Profile page</h1>");
// });

// CRUD -> Create Read Update Delete   Post Get Put Delete

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());

app.use("/api/v1", router);

// app.get("/", (req, res) => {
//       //console.log(path.join(__dirname,"./index.html"));
//       res.sendFile(path.join(__dirname,"./index.html"));
// });

// app.post("/api/vi/login", (req, res) => {
//       res.send(`<h1>DONE Login ${req.body.name}</h1>  Your email is : ${req.body.email}`)
//       console.log(req.body);
// })

app.get("/", (req, res) => {
      // res.json({
      //       name: "Ashmit",
      //       email: "sample@gmail.com",
      //       password: "hexed",
      // })
      res.sendFile(path.join(__dirname + "/index.html"));
});

// app.post("/api/v1/register", );

app.listen(port, (req, res) => {
      console.log(`Server is working on port : ${port}`);
});

