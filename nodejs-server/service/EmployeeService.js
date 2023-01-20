'use strict';


/**
 * Consulta de funcionários
 * Realiza a consulta de funcionários
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * search String Valor de pesquisa (ID, código, nome, apelido, CPF, RFID do funcionário) (optional)
 * field String Campo de pesquisa (id, code, name, nickname, cpf, rfid) (optional)
 * page Integer Número da página (Nulo para retornar todos registros) (optional)
 * limit Integer Limite de registros (Nulo para retornar todos registros) (optional)
 * returns inline_response_200_11
 **/
exports.services.employee.web.get_employee = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,search,field,page,limit) {
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

