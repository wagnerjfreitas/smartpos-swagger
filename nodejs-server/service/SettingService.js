'use strict';


/**
 * Configuração do backoffice
 * Consulta a configuração do backoffice
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * returns inline_response_200_26
 **/
exports.services.setting.web.get_setting = function(authorization,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable) {
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

