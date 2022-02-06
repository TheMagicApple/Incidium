
const axios = require('axios')

const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/login', async (req, res) => {
    const { username, password } = req.body 

    console.log("ASHJKDASJKDHJASLDH")
    window.location.href="/account";

    const response = await axios.get(`http://incidium.tech/api/users/user?username=${username}&password=${password}`);
    if(response == null) return;

    res.cookie('username', username);
    res.cookie('password', password);

    res.status(200).json({ "Successful": true})
});

router.post('/logout', (req, res) => {

});

module.exports = router;