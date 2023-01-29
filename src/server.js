const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Routes = require('./routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: [
        '*',
        'http://localhost:3000'
    ],
}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));

// init Routes
Routes(app);

app.listen(PORT , () => console.log(`Server is runnong on port: http://localhost:${PORT}`))

