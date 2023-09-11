const express = require('express')
const db = require('./db')
const router = express.Router()
const utils = require('./utils')

router.get('/products', (request, response) => {
    const statement = `SELECT * FROM products INNER JOIN categories using(pcid)`
    db.pool.query(statement, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

// add_category
router.post('/addcategory', (request, response) => {
    const { category_name } = request.body
    const statement = `INSERT INTO categories (category_name, category_image) VALUES (?,'default_cat.jpg')`
    db.pool.query(statement, [category_name], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

// update_category
router.put('/updatecategory/:pcid', (request, response) => {
    const pcid = request.params.pcid
    const { category_name } = request.body
    const statement = `UPDATE categories SET category_name=? WHERE pcid=?`
    db.pool.query(statement, [category_name, pcid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

// delete_category
router.delete('/deletecategory/:pcid', (request, response) => {
    const id = request.params.pcid
    const statement = `DELETE FROM categories WHERE pcid=?`
    db.pool.query(statement, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

// add_product
router.post('/addproduct', (request, response) => {
    const { product_name, product_price, product_description, pcid } = request.body
    const statement = `INSERT INTO products (product_name, product_price, product_description, product_image,pcid) VALUES(?,?,?,'default_product.jpg',?)`
    db.pool.query(statement, [product_name, product_price, product_description, pcid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

// update_product
router.put('/updateproduct/:pid', (request, response) => {
    const pid = request.params.pid
    const { product_name, product_price, product_description, pcid } = request.body
    const statement = `UPDATE products SET product_name=?, product_price=?, product_description=?, pcid=? WHERE pid=?`
    db.pool.query(statement, [product_name, product_price, product_description, pcid, pid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

// delete_product
router.delete('/deleteproduct/:pid', (request, response) => {
    const id = request.params.pid
    const statement = `DELETE FROM products WHERE pid=?`
    db.pool.query(statement, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

module.exports = router