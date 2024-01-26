const express = require('express');
const {auth} = require("../middlewares/auth");
const router = express.Router()

const {getWord, postWord, deleteWord, getAllWords,getUserWords} = require("../controllers/wordController");

router.get("/:id",auth, getWord)
router.post("/", postWord)
router.get("/", getAllWords)
router.get("/user/:id", getUserWords)
router.delete("/:id",deleteWord)

module.exports = router
