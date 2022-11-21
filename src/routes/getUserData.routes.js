const router = require('express').Router();
const User = require('../models/usuario');

router.post('/', async(req, res)=> {
    try{
        const user = await User.find({name: req.body.nome})
        res.json(user)
    }catch(err){
        console.log(err )
    }
})
router.get
('/getUser/:crp', async(req, res)=> {
    try{
        const crp = req.params.crp
       const [user] = await User.find({crp: crp})
       res.json(user)
    }catch(err){
        console.log(err )
    }
})

module.exports= router