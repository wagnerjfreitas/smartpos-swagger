'use strict';


/**
 * Permissões do usuário
 * Realiza a consulta de permissões do usuário no backoffice
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * username String Nome do usuário (optional)
 * password String Senha de acesso do usuário (optional)
 * rfid String Cartão RFID do usuário (optional)
 * returns inline_response_200_2
 **/
exports.services.user.web.get_user_permission = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,username,password,rfid) {
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


/**
 * Login do usuário
 * Realiza o login do usuário no backoffice
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * data Data_1 Dados do usuário (optional)
 * returns inline_response_200_1
 **/
exports.services.user.web.post_user_login = function(authorization,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data) {
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


/**
 * Logout do usuário
 * Realiza o logout do usuário no backoffice
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * no response value expected for this operation
 **/
exports.services.user.web.post_user_logout = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

