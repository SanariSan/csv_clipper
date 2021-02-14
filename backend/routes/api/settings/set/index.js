module.exports = (req, res, next) => {
    let result = global.csvControl.updSettings(req.body);

    res.json({
        status: result ? 'OK' : 'ERR',
        data: result ? {} : undefined,
        err: result ? undefined : 'could not save'
    });
};