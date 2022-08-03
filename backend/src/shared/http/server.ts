import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const serverPort = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log(`Server started on http://localhost:3000`);
});
