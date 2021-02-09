module.exports = (req, res, next) => {
    const reqId = req.params.id;
    console.log('single ' + reqId);

    if ((global.csvControl.files.some(_ => _.id === reqId))) {
        const content = global.csvControl.getFile(reqId);
        res.json({
            status: 'OK',
            data: content
        });
    }
    else {
        res.json({
            status: 'ERR',
            err: 'key_not_found'
        });
    }


};