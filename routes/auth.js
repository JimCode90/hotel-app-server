import express from "express";

//Controladores
import { showMessage, register } from "../controllers/auth";

const router = express.Router()

router.get('/:message', showMessage)
router.post('/register', register)

module.exports = router
