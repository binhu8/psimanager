const router = require('express').Router();
const User = require('../models/usuario');

router.post('/', async(req, res)=> {
    try{
        const user = await User.find({name: req.body.nome})
        console.log(req.body)
        res.json(user)
    }catch(err){
        console.log(err )
    }
})

module.exports= router