
const axios = require('axios')

const cookieParser = require('cookie-parser')
const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(cookieParser());

router.post('/login', async (req, res) => {
    const { username, password } = req.body 

    console.log("ASHJKDASJKDHJASLDH")
    

    const response = await axios.get(`http://www.incidium.tech/api/users/user?username=${username}&password=${password}`);
    console.log(response)
    if(response == null) return;

    res.cookie('username', username);
    res.cookie('password', password);

    res.status(200).send('Cookies sent')
});

router.post('/logout', (req, res) => {
    res.clearCookie('username');
    res.clearCookie('password');
});

router.get('/login/info', (req, res) => {
    console.log(req.cookies);
    res.json({ username: req.cookies.username });
});


module.exports = router;