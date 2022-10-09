const router = require('express').Router();
const User = require('../models/usuario');

router.post('/', async(req, res)=> {
    try{
        const user = await new User(req.body).save()
        console.log(req.body)
        res.json(user)
    }catch(err){
        console.log(err )
    }
});

router.put('/update-user', async(req, res)=> {
    try{
        const userUpdate = await User.findByIdAndUpdate(req.body._id, req.body);
        const response = await User.findById(userUpdate._id);
        console.log('toma ai oque procuras -> ',response)
        res.json(response)
    }catch(err){
        console.log(err)
    }
})

module.exports= router