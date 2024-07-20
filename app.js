const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data in request body
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'mainPage.html'));
});

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

module.export = app 