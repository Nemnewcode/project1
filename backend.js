
const express = require('express');
const app = express();
const port = 3000;

app.get('/shoes', (req, res) => {
  const shoes = []; 

  res.json(shoes);
});

app.get('/shoes/:id', (req, res) => {
  const shoeId = req.params.id;

  const shoe = {}; 

  res.json(shoe);
});

app.post('/shoes', (req, res) => {

  const newShoe = req.body;

  res.json(newShoe);
});

app.put('/shoes/:id', (req, res) => {
  const shoeId = req.params.id;
  
  const updatedShoe = req.body;

  res.json(updatedShoe);
});

app.delete('/shoes/:id', (req, res) => {
  const shoeId = req.params.id;

  res.json({ message: 'Đôi giày đã được xóa.' });
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe ở cổng ${port}`);
});