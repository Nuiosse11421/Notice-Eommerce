import express from 'express';

const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to Express.js backend');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})