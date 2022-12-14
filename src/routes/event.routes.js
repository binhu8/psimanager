const router = require('express').Router();
const Evento = require('../models/evento');
const Cliente = require('../models/cliente')
const nodemailer = require('nodemailer');


// function sendEmail(res, cliente){

//     let pass = process.env.PASS_EMAIL
//     console.log(passs )
//     let email = 'no-replypsi@outlook.com'

//     const bodyEmail = `
//     <h1>Olá ${cliente.nome}</h1>
//     <hr>
//     <br>
//     <h2>Sua consulta foi agendada para o dia: ${res.data} às ${res.time}</h2>
//     <h3>A reunião acontecerá na nossa palataforma.</h3>
//     <h3>Link:</h3><span>${res.meet}</span>
//     <h3>É importante estar em um local agrádavel e silêncioso para ter uma melhor experiência,</h3>
//     `

//     const transporter = nodemailer.createTransport({
//         host: "smtp.office365.com",
//         port: '587',
//         secure: false, 
//         auth: {
//             user: email,
//             pass: pass
//         },
//         tls: {rejectUnauthorized: false}
//     });

//     const mailOptions = {
//         from: 'no-replypsi@outlook.com',
//         to: cliente.email,
//         subject: 'Confirmação de agendamento',
//         html: bodyEmail
//     }

//     transporter.sendMail(mailOptions, (error, info)=> {
//         if(error){
//             console.log(error)
//         }else{
//             console.log('E-mail enviado: ', info.response)
//         }
//     })
// }

router.post('/', async(req, res)=> {
    try{
        const body = req.body
        let event 
        body.forEach(async evento => {

            event = await new Evento(evento).save()
            console.log(evento, 'this event')
            
        })
        

        res.json(event)
    }catch(err){
        console.log(err)
    }
});

router.get('/get', async(req, res)=> {
    try{
        let event = await Evento.find({crp: req.query.crp}).sort({start: +1})
        
        res.json(event)
    }catch(err){
        console.log(err)
    }
});

router.get('/get-evento-cliente', async(req, res)=> {
    try{
        let events = await Evento.find({cpfCliente: req.query.cpf, crp: req.query.crp}).sort({start: +1})
        
        res.json(events)
    }catch(error){
        res.json({error: true, message: error.message})
    }
})

router.delete('/delete/:id', async(req, res)=> {
    try{
        const id = req.params.id
        let evento = await Evento.findByIdAndDelete(id)
        res.json(evento)
    }catch(error){
        res.json({error: true, message:error.message })
    }
})


module.exports = router