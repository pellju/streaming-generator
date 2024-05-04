import express, { Express, Request , Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.post('/register', (req: Request, res: Response) => {

});

app.get('/register', (req: Request, res: Response) => {
    res.send({'Information': 'This is a TEST'})      
});

app.get('/', (req: Request, res: Response) => {
    res.send('This is a sample page');
});

app.listen(port, () => {
    console.log('[Server is running] at http://127.0.0.1:'+port);
});