const router = require('express').Router();
const Cliente = require('../models/cliente')

router.post('/', async(req, res)=>{
    try{
        const body = req.body
        const cliente = await new Cliente(body).save()
       
        res.json(cliente)

    }catch(error){
        res.json({error: true, message: error.message})
    }
});

router.put('/update', async(req, res)=> {
    try{
        const body = req.body
        let cliente = await Cliente.findByIdAndUpdate(body._id, body);
        res.json(cliente);
    }catch(error){
        console.log(error)
    }
})

router.delete('/cliente', async(req, res)=> {
    try{
       
        let event = await Cliente.findByIdAndDelete(req.query._id)
        let clientes = await  Cliente.find({crpResponsavel: req.query.crpResponsavel});
        res.json(clientes)
    }catch(error){
        res.json({error: true, message: error.message})
    }
});



module.exports = router