import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

// Where we will keep books
let books = [
    {
        title: 'The Bible',
        isbn: 1234,
        author: 'Jesus Christ',
        publisher: 'King James',
        numOfPages: 1472
    
    }
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    // We will be coding here
    res.json({ 'hello': 'there' });
});

app.get('/book', (req, res) => {
    res.json(books);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));