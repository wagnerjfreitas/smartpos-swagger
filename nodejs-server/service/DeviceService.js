'use strict';


/**
 * Envia o arquivo de log
 * Realiza o envio do arquivo de log das operações do dispositivo
 *
 * authorization String Token de autorização da API gerado pelo hub de serviços (Em rede local gerado pelo backoffice)
 * pOSToken String Token de autenticação gerado pelo backoffice
 * storeCNPJ String CNPJ da empresa (somente digitos)
 * deviceNumber String Número serial do dispositivo
 * aPKVersion String Número da versão do aplicativo (optional)
 * rFIDAvailable Boolean Indica se o dispositivo faz leitura de cartão RFID (optional)
 * data Data_6 Dados do arquivo de log (optional)
 * no response value expected for this operation
 **/
exports.services.device.web.post_device_log = function(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

