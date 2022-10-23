const router = require('express').Router();
const Evento = require('../models/evento');
const Cliente = require('../models/cliente')
const nodemailer = require('nodemailer');


function sendEmail(res, cliente){

    let pass = process.env.PASS_EMAIL
    let email = 'no-replypsi@outlook.com'

    const bodyEmail = `
    <h1>Olá ${cliente.nome}</h1>
    <hr>
    <br>
    <h2>Sua consulta foi agendada para o dia: ${res.data} às ${res.time}</h2>
    <h3>A reunião acontecerá na nossa palataforma.</h3>
    <h3>Link:</h3><span>${res.meet}</span>
    <h3>É importante estar em um local agrádavel e silêncioso para ter uma melhor experiência,</h3>
    <h3>lembre-se de estar com bateria caso opite por fazer a chamada de um celular.</h3>
    `

    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: '587',
        secure: false, 
        auth: {
            user: email,
            pass: pass
        },
        tls: {rejectUnauthorized: false}
    });

    const mailOptions = {
        from: 'no-replypsi@outlook.com',
        to: cliente.email,
        subject: 'Confirmação de agendamento',
        html: bodyEmail
    }

    transporter.sendMail(mailOptions, (error, info)=> {
        if(error){
            console.log(error)
        }else{
            console.log('E-mail enviado: ', info.response)
        }
    })
}

router.post('/', async(req, res)=> {
    try{
        const body = req.body
        let event = await new Evento(body).save()
        let [cliente] = await Cliente.find({cpf: body.cpfCliente })
        console.log('toma -> ', cliente)
        
        sendEmail(body, cliente)

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


module.exports = router