module.exports = (req, res, next) => {
    // console.log(global.csvControl.csvSettings);
    res.json({
        status: 'OK',
        data: global.csvControl.csvSettings
    });
};