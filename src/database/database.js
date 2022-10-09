const mongoose = require('mongoose');
const URI ="mongodb+srv://binnhu8:naruto5997@cluster0.zskd6dl.mongodb.net/psi-agenda?retryWrites=true&w=majority"

mongoose.connect(URI).then(()=>console.log('Conectado com sucesso ao database')).catch(error => console.log(error))