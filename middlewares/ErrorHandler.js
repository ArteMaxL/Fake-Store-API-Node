const notFound = (req, res, next) => {
    const err = new Error("Not Found!");
    err.status = 404;
    res
        .status(404)
        .send({ message: "Custom Not Found!", err });
    next();
}

module.exports = {
    notFound,
};