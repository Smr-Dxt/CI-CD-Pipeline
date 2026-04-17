import express from 'express';
const app = express();

app.get('/health', (req, res) => {
    res.send('Server is running good');
});

app.listen(3000, () => {
    console.log('Server is running on this port');
});
