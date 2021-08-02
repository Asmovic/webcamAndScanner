const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    dotEnv = require('dotenv').config(),
    UplodPhoto = require('./src/UploadPhotoController').UplodPhoto,
    app = express(),
    PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

if (process.env.NODE_ENV === 'production') {

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    })

}



app.post('/upload-photo', UplodPhoto);

app.listen(PORT, console.log(`App is running on port ${PORT}`));
