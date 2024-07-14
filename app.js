const express = require("express");
const path = require("path");
const mysql = require('mysql2/promise');

const app = express();
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data in request body

app.use(express.json()); // Parse JSON data in request body

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'mainPage.html'));
});

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306, // Replace with custom port if used
  user: 'root',
  password: 'ahmed',
  database: 'my_database'
});

// Test database connection (optional)
pool.getConnection()
  .then(connection => {
    console.log('Database connection successful!');
    connection.release();
  })
  .catch(err => {
    console.error('Error connecting to database:', err);
  });

app.post('/chat', async (req, res) => {
  console.log(req.body); // Log the entire request body

  try {
    const username = req.body.username ; // Handle missing username
    const message = req.body.message ;

    // Prepared statement to prevent SQL injection
    const [rows, fields] = await pool.query('INSERT INTO messages (username, message) VALUES (?, ?)', [username, message]);
    console.log('Message inserted successfully:', rows);
    res.send('Message sent successfully!');
  } catch (err) {
    console.error('Error inserting message:', err);
    res.status(500).send('Error sending message!');
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
module.export = app 