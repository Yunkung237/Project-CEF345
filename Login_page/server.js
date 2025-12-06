const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static('public'));

// Dummy users
const users = [
  { username: "princewill", password: "1234" },
  { username: "techie", password: "abcd" },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.json({ success: false, signup: true, message: "User not found. Please sign up." });
  }

  if (user.password === password) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false, message: "Incorrect password." });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  window.location.href = "welcome.html"; // Or whatever the filename is

});
