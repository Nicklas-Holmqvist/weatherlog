const helloServer = (req, res, next) => {
    res.status(200).json({
        'Vädret': 'Kallt och vitt!',
        'Saknar': 'Våren och försommaren!'
    });
};

module.exports.helloServer = helloServer