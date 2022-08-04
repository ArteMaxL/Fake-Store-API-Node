const dateRequest = (req, res, next) => {
    date = new Date().toLocaleString();
    console.log(`Method: ${req.method} - Url: ${req.url} - Date: ${date}`);
    next();
}

module.exports = {
    dateRequest,
}