const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (request, response) => {
    response.send('This is root router')
});

router.get('/home', (request, response) => {
    response.send('This is home router')
});

app.use('/', router);

app.listen(process.env.port || 3000);
console.log("Running Server and displaying the logs.........");
