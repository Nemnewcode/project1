

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Chào mừng đến với giao diện backend!');
});
app.listen(3000, () => {
  console.log('Server đang lắng nghe tại cổng 3000...');
});