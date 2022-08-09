import express from "express";
import task from './src/routes/tasks.routes.js';
import cors from 'cors';


const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use('/task', task)

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
