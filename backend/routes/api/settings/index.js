module.exports = (req, res, next) => {
    res.json({
        status: 'OK',
        data: process.env.settings
    });
};