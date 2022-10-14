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
    console.log('asdfasdfs')
    try{
        console.log(req.body._id)
        let event = await Cliente.findByIdAndDelete(req.body._id)
        res.json({error: false, message: 'cliente deletado'})
    }catch(error){
        res.json({error: true, message: error.message})
    }
});



module.exports = router