const cors = require('cors');
const express = require('express');
const app = express();



//middlewars
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//routes
app.use(require('./routers/indexrouter'));

app.listen(4200);
console.log('Server on port 4200')