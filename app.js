const express = require('express');
const productRouter = require('./routes/ProductRoute');
const cartRouter = require('./routes/CartRoute');
const userRouter = require('./routes/UserRoute');
const { notFound } = require('./middlewares/ErrorHandler');
const { dateRequest } = require('./middlewares/DateRequest');

const app = express();
const PORT = 3000;

app.use('/products', dateRequest, productRouter);
app.use('/carts', dateRequest, cartRouter);
app.use('/users', dateRequest, userRouter);
app.use(notFound);

app.listen(PORT, () => {
    console.log(`Fake Store App listening on port ${PORT}`)
});