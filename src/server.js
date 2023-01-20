const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Routes = require('./routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));
// app.use(express.static(path.join(__dirname, 'views')))

// init Routes
Routes(app);

app.listen(PORT , () => console.log(`Server is runnong on port: http://localhost:${PORT}`))

