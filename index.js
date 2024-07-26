import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './backend/config/db.js';
import passedTest from './backend/controllers/passed.controller.js';
import failedTest from './backend/controllers/failed.controller.js';
import remedialTest from './backend/controllers/remedial.controller.js';

const app = express();

app.use(cors());
app.use(express.json());
config();

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

passedTest();
failedTest();
remedialTest();
