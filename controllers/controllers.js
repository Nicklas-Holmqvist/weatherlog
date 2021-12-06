const helloServer = (req, res, next) => {
    res.status(200).json('Weatherlog, coming soon');
};

module.exports.helloServer = helloServer