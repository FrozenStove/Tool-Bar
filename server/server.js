const express = require('express')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('dist/client'))

app.get('/scheduling',
    (req, res) => res.sendStatus(200)
);

app.listen(PORT, err => {
    console.log(new Date(), err || 'server listening on port ' + PORT);
});

module.exports = app;