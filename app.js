const express = require('express');
const router = require('./router/router');
const { notFound } = require('./middlewares/ErrorHandler');
const { dateRequest } = require('./middlewares/DateRequest');

const app = express();
const PORT = 3000;

app.use(dateRequest);
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Fake Store App listening on port ${PORT}`)
});