import { client } from "./index.js"
import bcrypt from "bcrypt"


async function getAllProducts(req) {
    return await client.db("b52-products").collection("products").find(req.query).toArray();
}


async function getProductById(id) {
    return await client.db("b52-products").collection("products").findOne({ id: id });
}


async function deleteProductById(id) {
    return await client.db("b52-products").collection("products").deleteOne({ id: id });
}


async function addProducts(product) {
    return await client.db("b52-products").collection("products").insertOne(product);
}


async function updateProducts(id, updatedProduct) {
    return await client.db("b52-products").collection("products")
        .updateOne({ id: id }, { $set: updatedProduct });
}


async function genPassword(password) {
    const salt = await bcrypt.genSalt(10) //= bcrypt.genSalt(no. of rounds) 
    console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword);
    return hashedPassword
}

async function createUser(username, hashPassword) {
    return await client.db("b52-products").collection("users")
        .insertOne({ username: username, password: hashPassword });
}

async function getUserByName(username) {
    return await client.db("b52-products").collection("users")
        .findOne({ username: username });
}




export { addProducts, deleteProductById, getProductById, getAllProducts, updateProducts, genPassword, createUser, getUserByName }
