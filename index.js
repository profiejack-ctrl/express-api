const express = require('express');
const User = require("./models/UserModel");
require('./connection');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello KentB!');
});

app.get('/users', async (req, res) => {
    
    const users = await User.find();
    res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
