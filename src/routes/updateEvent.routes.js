const router = require('express').Router();
const Evento = require('../models/evento')

router.post('/update-event', async(req, res)=> {
    try{
        let event = await Evento.findByIdAndUpdate(req.body._id, req.body)
        res.json(event)
    }catch(error){
        res.json({error: true, message: error.message})
    }
});

module.exports = router