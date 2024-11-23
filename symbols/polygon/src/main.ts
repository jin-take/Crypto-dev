import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('This is the Polygon server');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});