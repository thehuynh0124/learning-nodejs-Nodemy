const { json } = require('body-parser')
const express = require('express')
const userModel = require('../models/user')
const router = express.Router()

router.post('/register', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password


    userModel.findOne({
        username: username

    })

    .then(data => {
        if(data){
            res.json('user đã tồn tại')
        }else{
            return userModel.create({
                username: username,
                password: password
            })
        }
    })
    .then(data=>{
        res.json('register successed')
    })

    .catch (err =>{
        res.status(500).json('register failed')
    })
})

router.post('/login', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password


    userModel.findOne({
        username: username,
        password: password
    })
    .then(data =>{
        if(data){
            res.json('login successed')
        }else{
            res.status(400).json('login failed')
        }
    })
    .catch(err =>{
        res.status(500).json('lỗi bên server')
    })
})




router.get('/getuser', (req, res) => {
    userModel.find()
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.status(500),json('loi server')
    })
})


router.put('/changePassword/:id', (req, res, next) => {
    const id = req.params.id
    const newPassword = req.body.newPassword

    userModel.findByIdAndUpdate(id, {
        password: newPassword
    })
    .then(data =>{
        res.json('update successed')
    })
    .catch(err =>{
        res.status(500).json('loi server')
    })
})

router.delete('/deleteUser/:id', (req, res, next) => {
    const id = req.params.id
    userModel.deleteOne({
        _id: id
    })
    .then(data =>{
        res.json('delete successed')
    })
    .catch(err =>{
        res.status(500).json('loi server')
    })
})

module.exports = router