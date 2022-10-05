const express = require("express");
const app = express();
const port = 3000;

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));
app.use(express.static('public'));

let server = app.listen(port, () => console.log("Server started at http://localhost:%s", port));
