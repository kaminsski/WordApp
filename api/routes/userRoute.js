const express = require('express');

const router = express.Router()

const {getUser, register, login, getAllUsers} = require("../controllers/userController")

router.get("/:id", getUser)
router.post("/register", register)
router.post("/login", login)
router.get("/",getAllUsers)

module.exports = router