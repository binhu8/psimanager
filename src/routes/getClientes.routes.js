const router = require('express').Router();
const Cliente = require('../models/cliente')

router.get('/', async(req, res)=>{
    try{

        const cliente = await  Cliente.find({crpResponsavel: req.query.crp});
        res.json(cliente)

    }catch(error){
        res.json({error: true, message: error.message})
    }
});



module.exports = router