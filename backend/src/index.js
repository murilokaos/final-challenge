import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    "Hello": "World",
  });
})

app.listen(process.env.PORT, () => {
  console.log('\x1b[1m\x1b[5m\x1b[43m\x1b[37m%s\x1b[0m',
  `Listening backend in port ${process.env.PORT}`);
})