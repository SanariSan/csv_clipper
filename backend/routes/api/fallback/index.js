module.exports = (req, res, next) => {
    res.json({
        status: 'OK',
        dir: 'api_fallback'
    });
};