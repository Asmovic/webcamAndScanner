const express = require('express'),
    path = require('path'),
    app = express(),
    PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, console.log(`App is running on port ${PORT}`));
