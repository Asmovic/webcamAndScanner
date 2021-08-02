const fs = require('fs');
exports.UplodPhoto = (req, res) => {

    fs.writeFile(req.body.path, req.body.image, 'base64', function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify({ 'link': req.body.path, 'msg': 'Image Uploaded' }));
        }
    });
}