const helloServer = (req, res, next) => {
    res.status(200).json('Hej från servern');
};

module.exports.helloServer = helloServer