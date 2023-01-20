'use strict';


/**
 * Consulta de clientes
 * Realiza a consulta de clientes
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * search String Valor de pesquisa (ID, código, nome, apelido, CPF, CNPJ, RFID do cliente, placa do veículo, ID ou CPF do motorista, cartão fidelidade) (optional)
 * field String Campo de pesquisa (id, code, name, nickname, cpf, rfid, plate, loyaltyCard) (optional)
 * page Integer Número da página (Nulo para retornar todos registros) (optional)
 * limit Integer Limite de registros (Nulo para retornar todos registros) (optional)
 * returns inline_response_200_7
 **/
exports.services.customer.web.get_customer = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,search,field,page,limit) {
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
 * Consulta de restrição de crédito do cliente
 * Realiza a consulta de restrição de crédito do cliente
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * search String Valor de pesquisa (ID, código, nome, apelido, CPF, CNPJ do cliente, placa do veículo) (optional)
 * paymentId Integer Id da forma de pagamento (Consulta a restrição de uma determinada forma de pagamento) (optional)
 * username String Nome do usuário com permissão para realizar a consulta de crédito completa (optional)
 * password String Senha de acesso do usuário com permissão para realizar a consulta de crédito completa (optional)
 * rfid String Cartão RFID do usuário (optional)
 * returns inline_response_200_8
 **/
exports.services.customer.web.get_customer_credit = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,search,paymentId,username,password,rfid) {
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
 * Consulta de motoristas do cliente
 * Realiza a consulta de motoristas do cliente
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * customerId Integer Id do cliente
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * search String Pesquisa pelo nome do motorista (optional)
 * returns List
 **/
exports.services.customer.web.get_customer_driver = function(authorization,pOSToken,storeCNPJ,deviceNumber,customerId,aPKVersion,rFIDAvailable,search) {
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
 * Consulta de veículos da frota do cliente
 * Realiza a consulta de veículos da frota do cliente
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * customerId Integer Id do cliente
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * search String Pesquisa pela placa do veículo (optional)
 * returns List
 **/
exports.services.customer.web.get_customer_fleet = function(authorization,pOSToken,storeCNPJ,deviceNumber,customerId,aPKVersion,rFIDAvailable,search) {
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

