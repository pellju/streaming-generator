import express, { Express, Request , Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('This is a sample page');
});

app.listen(port, () => {
    console.log('[Server is running] at http://127.0.0.1:'+port);
});