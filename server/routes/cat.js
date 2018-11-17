"use strict"
const express = require('express')
const { resp } = require('../components/response')
const { OurSQL } = require('../components/oursql')
let router = express.Router()
let sql = new OurSQL()

router.get('/', (req, res) => {
    return res.json(resp.make()
        .setResponseCode(200)
        .setMessage("Welcome to the cat API")
    )
})

router.get('/add', (req, res) => {
    let post = {
        id: req.hashId,
        cName: req.name,
        dob: req.dob,
        sex: req.sex,
        breed: req.breed,
        behavior: req.behavior,
        stat: req.stat,
        locId: req.locId,
        adopterId: null 
    }
    sql.query('INSERT INTO Cat SET ?', post, 
    (results, fields) => {
        sql.quitConnection()
        return res.json(resp.make()
            .setMessage("Query successful!")
            .setResponseCode(200)
        )
    }, (error) => {
        if (error){
            return res.json(resp.make()
                .setError(error)
                .setResponseCode(500)
                .setMessage("There was an error :(")
            )
        }
    })
})

router.get('/edit', (req, res) => {
    let post = {
        id: req.id
        cName: req.name,
        dob: req.dob,
        sex: req.sex,
        breed: req.breed,
        behavior: req.behavior,
        stat: req.stat,
        locId: req.locId,
        adopterId: req.adopterId 
    }
    sql.query('UPDATE Cat SET cName=?, dob=?, sex=?, breed=?, behavior=?, stat=?, locId=?, adopterId=? WHERE id=?', post, 
    (results, fields) => {
        sql.quitConnection()
        return res.json(resp.make()
            .setMessage("Query successful!")
            .setResponseCode(200)
        )
    }, (error) => {
        if (error){
            return res.json(resp.make()
                .setError(error)
                .setResponseCode(500)
                .setMessage("There was an error :(")
            )
        }
    })
})

router.get('/all', (req, res) => {
    return res.json(resp.make()
        
    )
})

router.get('/local', (req, res) => {
    return res.json(resp.make()
        
    )
})

router.get('/pair', (req, res) => {
    return res.json(resp.make()
        
    )
})

router.get('/add', (req, res) => {
    return res.json(resp.make()
        
    )
})

module.exports = router