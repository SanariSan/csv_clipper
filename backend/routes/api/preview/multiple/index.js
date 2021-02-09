module.exports = (req, res, next) => {
    console.log('multiple');
    res.json({
        status: 'OK',
        data: global.csvControl.files
    });
};