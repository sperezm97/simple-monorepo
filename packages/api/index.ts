import express from 'express';

const app = express();

app.get("/", (_req, res) => {
  res.send("saludos");
});

app.listen(3000);
