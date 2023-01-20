'use strict';


/**
 * Login do parceiro
 * Realiza o login do parceiro
 *
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * data Data Dados do parceiro (optional)
 * returns inline_response_200
 **/
exports.services.auth.web.post_auth_partner = function(storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

