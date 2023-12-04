import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();

const port = process.env.PORT;

const app = express()

app.use(express.json());
app.use(cors())

app.get('/', async(req, res) => {
    return res.json({message: 'Hallo world!'});
})

app.listen(port, () => console.log(`Server running port ${port}`));