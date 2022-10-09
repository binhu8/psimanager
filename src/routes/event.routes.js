const router = require('express').Router();
const Evento = require('../models/evento')

router.post('/', async(req, res)=> {
    try{
        let event = await new Evento(req.body).save()
        console.log(event, req.body)
        res.json(event)
    }catch(err){
        console.log(err)
    }
});

router.get('/get', async(req, res)=> {
    try{
        let event = await Evento.find({crp: req.query.crp})
        console.log( event)
        res.json(event)
    }catch(err){
        console.log(err)
    }
});

router.get('/get-evento-cliente', async(req, res)=> {
    try{
        console.log(req.query)
        let events = await Evento.find({cpfCliente: req.query.cpf, crp: req.query.crp})
        res.json(events)
    }catch(error){
        res.json({error: true, message: error.message})
    }
})

router.put('/update-event', async(req, res)=> {
    try{
        console.log(req.body._id)
        let event = await Evento.findByIdAndUpdate(req.body._id, req.body)
        res.json(event)
    }catch(error){
        res.json({error: true, message: error.message})
    }
})
module.exports = router