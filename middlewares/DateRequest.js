const dateRequest = (req, res, next) => {
    dateTime = new Date().toLocaleString();
    console.log(`Method: ${req.method} - Url: ${req.url} - Date: ${dateTime}`);
    next();
}

module.exports = {
    dateRequest,
}