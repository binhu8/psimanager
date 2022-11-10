const router = require('express').Router();
const User = require('../models/usuario');

router.post('/', async(req, res)=> {
    try{
        const body = req.body
        const usuarioDuplicado = await User.find({email: body.email}) 
        if(usuarioDuplicado.length > 0){
            res.json({error: true, message: 'E-mail já cadastrado'})
        }else{
            const user = await new User(body).save()
            res.json(user)
        }
        
    }catch(err){
        console.log(err )
    }
});

router.put('/update-user', async(req, res)=> {
    try{
        const userUpdate = await User.findByIdAndUpdate(req.body._id, req.body);
        const response = await User.findById(userUpdate._id);
        res.json(response)
    }catch(err){
        console.log(err)
    }
})

module.exports= router