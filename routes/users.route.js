const {getAllUsers, createUser, updateUser, deleteUser} = require('../controller/users.controller');

const router = require('express').Router();


router.get("/users", getAllUsers)
router.post("/users", createUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

module.exports = router;