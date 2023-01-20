'use strict';


/**
 * Libera todos os abastecimentos
 * Realiza a liberação (desbloqueio) de todos abastecimentos de uma pré-venda
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * orderId Integer Id da pré-venda
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * no response value expected for this operation
 **/
exports.services.fuelpump.web.delete_fuelpump_fuelling_all_by_order = function(authorization,pOSToken,storeCNPJ,deviceNumber,orderId,aPKVersion,rFIDAvailable) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Libera o abastecimento
 * Realiza a liberação (desbloqueio) do abastecimento que retona para pendência
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * fuellingId Integer Id do abastecimento
 * orderId Integer Id da pré-venda
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * no response value expected for this operation
 **/
exports.services.fuelpump.web.delete_fuelpump_fuelling_by_order = function(authorization,pOSToken,storeCNPJ,deviceNumber,fuellingId,orderId,aPKVersion,rFIDAvailable) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Consulta dos bicos de abastecimento
 * Realiza a consulta dos bicos de abastecimento
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * returns List
 **/
exports.services.fuelpump.web.get_fuelpump = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable) {
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


/**
 * Consulta dos abastecimentos de todos os bicos
 * Realiza a consulta dos abastecimentos de todos os bicos
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
 * page Integer Número da página (Nulo para retornar todos registros) (optional)
 * limit Integer Limite de registros (Nulo para retornar todos registros) (optional)
 * returns inline_response_200_13
 **/
exports.services.fuelpump.web.get_fuelpump_fuelling = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,username,password,rfid,page,limit) {
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
 * Consulta dos abastecimentos de um bico
 * Realiza a consulta dos abastecimentos de um bico
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * fuelPumpId Integer Número do bico de abastecimento
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * username String Nome do usuário (optional)
 * password String Senha de acesso do usuário (optional)
 * rfid String Cartão RFID do usuário (optional)
 * page Integer Número da página (Nulo para retornar todos registros) (optional)
 * limit Integer Limite de registros (Nulo para retornar todos registros) (optional)
 * returns inline_response_200_14
 **/
exports.services.fuelpump.web.get_fuelpump_fuelling_by_id = function(authorization,pOSToken,storeCNPJ,deviceNumber,fuelPumpId,aPKVersion,rFIDAvailable,username,password,rfid,page,limit) {
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
 * Reserva o abastecimento
 * Realiza a reserva (bloqueio) do abastecimento em uma pré-venda existente
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * fuellingId Integer Id do abastecimento
 * orderId Integer Id da pré-venda
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * no response value expected for this operation
 **/
exports.services.fuelpump.web.post_fuelpump_fuelling_by_order = function(authorization,pOSToken,storeCNPJ,deviceNumber,fuellingId,orderId,aPKVersion,rFIDAvailable) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Reserva o abastecimento
 * Realiza a reserva (bloqueio) do abastecimento em uma nova pré-venda
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * fuellingId Integer Id do abastecimento
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * returns inline_response_200_15
 **/
exports.services.fuelpump.web.post_fuelpump_fuelling_order = function(authorization,pOSToken,storeCNPJ,deviceNumber,fuellingId,aPKVersion,rFIDAvailable) {
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

