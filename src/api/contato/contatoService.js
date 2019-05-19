const Contato = require('./contato');

Contato.methods(['get', 'post', 'put', 'delete']);
Contato.updateOptions({new: true, runValidator: true});

module.exports = Contato;