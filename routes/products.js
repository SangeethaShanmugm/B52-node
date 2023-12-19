import express from "express"
import { getAllProducts, getProductById, deleteProductById, addProducts, updateProducts } from '../helper.js'


const router = express.Router() //express router

//get all products
router.get('/', async (req, res) => {
    // console.log(products)
    const { category, rating } = req.query
    console.log(req.query, category)
    if (req.query.rating) {
        req.query.rating = +req.query.rating
    }
    const product = await getAllProducts(req)
    res.send(product);
})
//get product by id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    //db.products.findOne({id: "1"})
    const product = await getProductById(id)
    // const result = products.find((pd) => pd.id === id)
    product ? res.send(product) : res.status(404).send({ message: "No Product Found" })
})
//delete product by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    //db.products.findOne({id: "1"})
    const product = await deleteProductById(id)
    // const result = products.find((pd) => pd.id === id)
    res.send(product)
})
router.post("/", async (req, res) => {
    const { id, name, poster, price, rating, summary, category } = req.body

    //check if required fields are present in req.body || Validate 
    if (!name || typeof name !== 'string' ||
        !poster || typeof poster !== 'string' ||
        !price || typeof price !== 'string') {
        return res.status(400).send({ error: "Invalid or missing fields in request" })
    }

    console.log(id, name, poster, price, rating, summary, category)

    const product = { id, name, poster, price, rating, summary, category, createdAt: new Date() }

    try {
        const result = await addProducts(product)
        res.send({ success: true, message: "Product Added Successfully" })
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Internal Server error" })
    }

})

//update products

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const updatedProduct = req.body
    console.log(req.params, id)
    //db.products.findOne({id: "1"})
    const result = await updateProducts(id, updatedProduct)
    // const result = products.find((pd) => pd.id === id)
    res.send(result)
})

export const productRouter = router