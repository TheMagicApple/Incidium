const express = require("express")
const path = require("path");
const router = express.Router();

router.use(express.static(path.join(__dirname, "../public")));

const viewsPath = path.join(__dirname, '../views');

router.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, '/index.html'))
});

router.get('/explore', (req, res) => {
    res.sendFile(path.join(viewsPath, '/explore.html'))
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(viewsPath, '/login.html'))
});

router.get('/nft', (req, res) => {
    res.sendFile(path.join(viewsPath, '/nft.html'))
});

router.get('/buy', (req, res) => {
  res.sendFile(path.join(viewsPath, '/buy.html'))
})

router.get('/signup', (req, res) => {
  res.sendFile(path.join(viewsPath, '/signup.html'))
})
router.get('/account', (req, res) => {
  res.sendFile(path.join(viewsPath, '/account.html'))
})

module.exports = router