const router = require('express').Router();
const Usuario = require('../models/usuario');

router.post('/', async(req, res)=> {
    try{
        const password = String(req.body.password);
        const [usuario] = await Usuario.find({email: req.body.email});

        if(usuario.senha == password){
            res.json(usuario);

        }else{
            res.json({error: true, message: 'E-mail ou senha inválidos'})
        }
    }catch(err){
        res.json({error: true, message: 'E-mail ou senha inválidos'})
    }
});

module.exports = router