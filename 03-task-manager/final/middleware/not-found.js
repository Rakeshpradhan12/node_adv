const notFound = (req, res) => {
    return res.status(404).send("Route does't exists");
}

module.exports = notFound
