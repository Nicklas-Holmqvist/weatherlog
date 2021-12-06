const helloServer = (req, res, next) => {
    res.status(200).json('För i helvete!');
};

module.exports.helloServer = helloServer