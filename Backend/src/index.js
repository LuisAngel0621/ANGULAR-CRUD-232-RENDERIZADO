const express = require('express');
const app = express();

//middlewars
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routers/indexrouter'));

app.listen(3000);
console.log('Server on port 3000')