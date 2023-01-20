'use strict';


/**
 * Consulta de produtos
 * Realiza a consulta de produtos
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * search String Valor de pesquisa (ID, código, código de barras, nome, nome resumido do produto) (optional)
 * field String Campo de pesquisa (id, code, barcode, name, shortname) (optional)
 * groupId Integer Id do grupo de produtos (Apenas para consulta de um determinado grupo de produtos) (optional)
 * page Integer Número da página (Nulo para retornar todos registros) (optional)
 * limit Integer Limite de registros (Nulo para retornar todos registros) (optional)
 * returns inline_response_200_17
 **/
exports.services.product.web.get_product = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,search,field,groupId,page,limit) {
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

