const restful = require('node-restful');
const mongoose = restful.mongoose;


const contatoSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	sobrenome: { type: String, required: true },
	telefone: { type: String, required: true },
	email: { type: String },
	skype: { type: String },
	twitter: { type: String },
	createdAt: { type: Date, default: Date.now }
});


module.exports = restful.model('Contato', contatoSchema);