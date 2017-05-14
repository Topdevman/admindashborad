const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('api works!');
});

router.post('/login', (req, res) => {
    const email = req.body.username;
    const password = req.body.password;
    if (email == 'admin' && password == 'admin123') {
        res.status(200);
    } else {
        res.status(404);
    }
});

module.exports = router;