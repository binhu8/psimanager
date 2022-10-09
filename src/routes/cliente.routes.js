const router = require('express').Router();
const Cliente = require('../models/cliente')

router.post('/', async(req, res)=>{
    try{

        const cliente = await new Cliente(req.body).save()
       
        res.json(cliente)

    }catch(error){
        res.json({error: true, message: error.message})
    }
});



module.exports = router