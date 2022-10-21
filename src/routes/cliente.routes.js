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

router.delete('/cliente', async(req, res)=> {
    try{
        console.log(req)
        let event = await Cliente.findByIdAndDelete(req.query._id)
        let clientes = await  Cliente.find({crpResponsavel: req.query.crpResponsavel});
        res.json(clientes)
    }catch(error){
        res.json({error: true, message: error.message})
    }
});



module.exports = router