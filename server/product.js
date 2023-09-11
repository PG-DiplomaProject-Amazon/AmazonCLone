const express = require('express')
const db = require('./db')
const router = express.Router()
const utils = require('./utils')

router.get('/products/:id', (request, response) => {
    const id = request.params.id
    const statement = `SELECT * FROM products INNER JOIN categories using(pcid) WHERE pid=?`
    db.pool.query(statement, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/search/:qry', (request, response) => {
    const qry = request.params.qry
    const statement = `SELECT * FROM products INNER JOIN categories using(pcid) WHERE product_name like concat('%', ?, '%')`
    db.pool.query(statement, [qry], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/categories/:pcid', (request, response) => {
    const pcid = request.params.pcid
    const statement = `SELECT * FROM products p INNER JOIN categories using(pcid) WHERE p.pcid=?`
    db.pool.query(statement, [pcid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/categories', (request, response) => {
    const statement = `SELECT * FROM categories`
    db.pool.query(statement, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/cart', (request, response) => {
    const { cid, pid } = request.body
    const statement = `INSERT INTO cart(cid,pid) VALUES(?,?)`
    db.pool.query(statement, [cid, pid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/cart/:id', (request, response) => {
    const id = request.params.id
    const statement = `SELECT * FROM (SELECT p.*, cart.qty FROM products p INNER JOIN cart using(pid) WHERE cart.cid=?) AS temp INNER JOIN categories using(pcid)`
    db.pool.query(statement, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/orders/:id', (request, response) => {
    const id = request.params.id
    const statement = `SELECT * FROM (SELECT p.*, o.order_date, o.qty FROM products p INNER JOIN orders o using(pid) WHERE o.cid=?) AS temp INNER JOIN categories using(pcid)`
    db.pool.query(statement, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/addcart', (request, response) => {
    const { cid, pid } = request.body
    const statement = `INSERT INTO cart(cid,pid) VALUES(?,?)`
    db.pool.query(statement, [cid, pid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.put('/addcart/:qty', (request, response) => {
    const qty = request.params.qty
    const { cid, pid } = request.body
    const statement = `UPDATE cart SET qty=? WHERE cid=? and pid=?`
    db.pool.query(statement, [qty, cid, pid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/placeorder', (request, response) => {
    const { cid, pid } = request.body
    const statement = `INSERT INTO orders(cid,pid) VALUES(?,?)`
    db.pool.query(statement, [cid, pid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/placeorder/:qty', (request, response) => {
    const qty=request.params.qty
    const { cid, pid } = request.body
    const statement = `INSERT INTO orders(cid,pid,qty) VALUES(?,?,?)`
    db.pool.query(statement, [cid, pid, qty], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/removefromcart', (request, response) => {
    const { cid, pid } = request.body
    const statement = `DELETE FROM cart WHERE cid=? and pid=?`
    db.pool.query(statement, [cid, pid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/cancelorder', (request, response) => {
    const { cid, pid } = request.body
    const statement = `DELETE FROM orders WHERE cid=? and pid=?`
    db.pool.query(statement, [cid, pid], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

module.exports = router
