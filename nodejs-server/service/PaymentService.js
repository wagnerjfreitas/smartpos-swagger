'use strict';


/**
 * Consulta das formas de pagamento
 * Realiza a consulta das formas de pagamento
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * returns List
 **/
exports.services.payment.web.get_payment = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

