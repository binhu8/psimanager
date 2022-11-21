const router = require('express').Router();
const {PIX} = require('gpix/dist')

router.post('/', async(req, res)=> {
    try{
        
        const user = req.body.userData;
        const valor = req.body.valor
        user.endereco.cep = user.endereco.cep.replace('-', '')
        console.log(user.endereco.cep)
        let pix = PIX.static()
                    .setReceiverName(user.nome, user.sobrenome)
                    .setReceiverCity(user.endereco.localidade)
                    .setReceiverZipCode(user.endereco.cep)
                    .setKey(user.chavePix)
                    .setIdentificator('0000990909099o')
                    .setDescription(`Consultas realizadas com ${user.nome} ${user.sobrenome}`)
                    .isUniqueTransaction(true)
                    .setAmount(valor)
        let brCode = await pix.getBRCode()
        let qrCode = await pix.getQRCode()
        console.log('deu certo')
        res.json({img: qrCode, code: brCode})        

    }catch(error){
        console.log(error)
        res.json({error: true, message: error.message})
    }
});

module.exports = router