module.exports = (req, res, next) => {
    res.json({
        status: 'OK',
        data: JSON.stringify({
            'temp': 'temp1'
        })
    });
};