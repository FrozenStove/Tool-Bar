const express = require('express')

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/scheduling',
    (req, res) => res.status(200)
);

app.listen(PORT, err => {
    console.log(new Date(), err || 'server listening on port ' + PORT);
});

module.exports = app;