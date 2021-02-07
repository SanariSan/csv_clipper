module.exports = (req, res, next) => {
    let resp = {
        previewId: 1,
        previewId: 2
    };

    res.json({
        status: 'OK',
        data: JSON.stringify(resp)
    });
};