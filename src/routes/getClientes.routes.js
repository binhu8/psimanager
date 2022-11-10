const router = require('express').Router();
const Cliente = require('../models/cliente')

router.get('/', async(req, res)=>{
    try{

        const cliente = await  Cliente.find({crpResponsavel: req.query.crp}).sort({nome: 1});
        res.json(cliente)

    }catch(error){
        res.json({error: true, message: error.message})
    }
});
router.get('/:id', async(req, res)=>{
    try{
        const id = req.params.id

        const cliente = await  Cliente.findById(id);
        res.json(cliente)

    }catch(error){
        res.json({error: true, message: error.message})
    }
});



module.exports = router