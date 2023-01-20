'use strict';


/**
 * Consulta de vendas
 * Realiza a consulta de vendas realizadas e canceladas no turno pelo dispositivo
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
 * returns List
 **/
exports.services.sale.web.get_sale = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,username,password,rfid) {
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
 * Solicitação do recibo fiscal
 * Realiza a solicitação do recibo fiscal
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * saleId String Id da venda (formato UUID4 xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * layoutColumns Integer Quantidade de colunas para impressão dos comprovantes (optional)
 * returns inline_response_200_23
 **/
exports.services.sale.web.get_sale_receipt = function(authorization,pOSToken,storeCNPJ,deviceNumber,saleId,aPKVersion,rFIDAvailable,layoutColumns) {
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
 * Registro da venda
 * Realiza o registro da venda
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * data Data_8 Dados da venda (optional)
 * no response value expected for this operation
 **/
exports.services.sale.web.post_sale = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cancelamento da venda
 * Realiza o cancelamento da venda
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * saleId String Id da venda
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * login Login  (optional)
 * returns inline_response_200_24
 **/
exports.services.sale.web.post_sale_cancel = function(authorization,pOSToken,storeCNPJ,deviceNumber,saleId,aPKVersion,rFIDAvailable,login) {
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
 * Validação da venda
 * Realiza a validação da venda antes do registro
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * data Data_9 Dados da venda
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * returns inline_response_200_22
 **/
exports.services.sale.web.post_sale_checkout = function(authorization,pOSToken,storeCNPJ,deviceNumber,data,aPKVersion,rFIDAvailable) {
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
 * Validação do cliente da venda
 * Realiza a validação do cliente da venda antes do checkout
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * data Data_10 Dados do cliente da venda
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * no response value expected for this operation
 **/
exports.services.sale.web.post_sale_customer = function(authorization,pOSToken,storeCNPJ,deviceNumber,data,aPKVersion,rFIDAvailable) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Validação de item da venda
 * Realiza a validação de item da venda antes do checkout
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * data Data_11 Dados do item da venda
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * no response value expected for this operation
 **/
exports.services.sale.web.post_sale_item = function(authorization,pOSToken,storeCNPJ,deviceNumber,data,aPKVersion,rFIDAvailable) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Envia o pagamento da venda
 * Realiza o envio do pagamento da venda
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * data Data_12 Dados do pagamento (optional)
 * returns inline_response_200_25
 **/
exports.services.sale.web.post_sale_payment = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data) {
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

