const SQLUserController = require('../../controllers/SQLControllers/SQLUserController.js')

const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/users', async (req, res) => {
  const status = await SQLUserController.getUsers();
  res.json({ users: status })
})

router.post('/users', async (req, res) => {
  const { username = null, password = null} = req.body;
  console.log(req.body)

  if(username == null || password == null) {
    res.json({ "Successful": false, "Reason": "Username or password not specified"});
    return;
  }

  const status = await SQLUserController.addUser(username, password);
  status.Successful = true;
  res.json(status);
})

router.delete('/users/:username/:password', async (req, res) => {
  const status = await SQLUserController.deleteUser(req.params.username);
  res.json(status);
})

router.get('/users/user', async (req, res) => {
  const status = await SQLUserController.getUser(req.query.username, req.query.password);
  res.json(status[0] || {});
})

module.exports = router;