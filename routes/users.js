import express from "express"
import { genPassword, createUser, getUserByName } from "../helper.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()

//register
router.post('/register', async (req, res) => {
    // console.log(products)
    const { username, password } = req.body
    console.log(username, password)
    //validate username
    const isUserExist = await getUserByName(username)
    console.log(isUserExist)
    if (isUserExist) {
        res.status(400).send({ message: "User already exists" })
        return;
    }

    if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/g.test(password)) {
        res.status(400).send({ message: "Password pattern does not match" })
        return;
    }
    const hashPassword = await genPassword(password)
    const result = await createUser(username, hashPassword)
    res.send(result);
})


//login 

router.post('/login', async (req, res) => {
    // console.log(products)
    const { username, password } = req.body
    console.log(username, password)
    //validate username
    const userFromDB = await getUserByName(username)
    console.log(userFromDB)
    if (!userFromDB) {
        res.status(400).send({ message: "Invalid credentials" })
        return;
    }

    const storedPassword = userFromDB.password
    console.log(storedPassword)
    const isPasswordMatch = await bcrypt.compare(password, storedPassword)
    if (!isPasswordMatch) {
        res.status(400).send({ message: "Invalid credentials" })
        return;
    }
    const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY, { expiresIn: 86400 })

    res.send({ message: "Successfully Logged in", token: token })
})

export const userRouter = router