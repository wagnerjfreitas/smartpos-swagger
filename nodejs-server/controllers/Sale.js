'use strict';

var utils = require('../utils/writer.js');
var Sale = require('../service/SaleService');

module.exports.services.sale.web.get_sale = function services.sale.web.get_sale (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var rfid = req.swagger.params['rfid'].value;
  Sale.services.sale.web.get_sale(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,username,password,rfid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.sale.web.get_sale_receipt = function services.sale.web.get_sale_receipt (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var saleId = req.swagger.params['saleId'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var layoutColumns = req.swagger.params['layoutColumns'].value;
  Sale.services.sale.web.get_sale_receipt(authorization,pOSToken,storeCNPJ,deviceNumber,saleId,aPKVersion,rFIDAvailable,layoutColumns)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.sale.web.post_sale = function services.sale.web.post_sale (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var data = req.swagger.params['data'].value;
  Sale.services.sale.web.post_sale(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.sale.web.post_sale_cancel = function services.sale.web.post_sale_cancel (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var saleId = req.swagger.params['saleId'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var login = req.swagger.params['login'].value;
  Sale.services.sale.web.post_sale_cancel(authorization,pOSToken,storeCNPJ,deviceNumber,saleId,aPKVersion,rFIDAvailable,login)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.sale.web.post_sale_checkout = function services.sale.web.post_sale_checkout (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var data = req.swagger.params['data'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  Sale.services.sale.web.post_sale_checkout(authorization,pOSToken,storeCNPJ,deviceNumber,data,aPKVersion,rFIDAvailable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.sale.web.post_sale_customer = function services.sale.web.post_sale_customer (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var data = req.swagger.params['data'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  Sale.services.sale.web.post_sale_customer(authorization,pOSToken,storeCNPJ,deviceNumber,data,aPKVersion,rFIDAvailable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.sale.web.post_sale_item = function services.sale.web.post_sale_item (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var data = req.swagger.params['data'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  Sale.services.sale.web.post_sale_item(authorization,pOSToken,storeCNPJ,deviceNumber,data,aPKVersion,rFIDAvailable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.sale.web.post_sale_payment = function services.sale.web.post_sale_payment (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var data = req.swagger.params['data'].value;
  Sale.services.sale.web.post_sale_payment(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
