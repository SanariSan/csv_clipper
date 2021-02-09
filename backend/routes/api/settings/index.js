module.exports = (req, res, next) => {
    res.json({
        status: 'OK',
        data: global.csvSettings
    });
};