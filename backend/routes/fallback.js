module.exports = (req, res, next) => {
    res.json({
        status: 'OK',
        dir: 'main_fallback'
    });
};