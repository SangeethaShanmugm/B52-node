import { client } from "./index.js"



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


export { addProducts, deleteProductById, getProductById, getAllProducts }
