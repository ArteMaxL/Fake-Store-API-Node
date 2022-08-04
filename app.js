const express = require('express');
const productRouter = require('./routes/ProductRoute');
const { notFound } = require('./middlewares/ErrorHandler');
const { dateRequest } = require('./middlewares/DateRequest');

const app = express();
const PORT = 3000;

app.use('/products', dateRequest, productRouter);
app.use(notFound);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});