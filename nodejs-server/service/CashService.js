'use strict';


/**
 * Consulta de turno
 * Realiza a consulta do último turno aberto/fechado do caixa
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
 * returns inline_response_200_3
 **/
exports.services.cash.web.get_cash_shift = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,username,password,rfid) {
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
 * Abertura de turno
 * Realiza a abertura de turno do caixa
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * data Data_3 Dados da abertura de turno (optional)
 * no response value expected for this operation
 **/
exports.services.cash.web.post_cash_shift = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Suprimento de caixa
 * Realiza um suprimento de caixa em dinheiro
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * data Data_4 Dados do suprimento (optional)
 * returns inline_response_200_5
 **/
exports.services.cash.web.post_cash_supply = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data) {
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
 * Sangria de caixa
 * Realiza uma sangria de caixa em dinheiro
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * data Data_5 Dados da sangria (optional)
 * returns inline_response_200_6
 **/
exports.services.cash.web.post_cash_withdrawal = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data) {
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
 * Fechamento de turno
 * Realiza o fechamento de turno do caixa
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * data Data_2 Dados do fechamento de turno (optional)
 * returns inline_response_200_4
 **/
exports.services.cash.web.put_cash_shift = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data) {
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

