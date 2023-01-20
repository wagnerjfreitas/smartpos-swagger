'use strict';

var utils = require('../utils/writer.js');
var Cash = require('../service/CashService');

module.exports.services.cash.web.get_cash_shift = function services.cash.web.get_cash_shift (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var rfid = req.swagger.params['rfid'].value;
  Cash.services.cash.web.get_cash_shift(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,username,password,rfid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.cash.web.post_cash_shift = function services.cash.web.post_cash_shift (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var data = req.swagger.params['data'].value;
  Cash.services.cash.web.post_cash_shift(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.cash.web.post_cash_supply = function services.cash.web.post_cash_supply (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var data = req.swagger.params['data'].value;
  Cash.services.cash.web.post_cash_supply(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.cash.web.post_cash_withdrawal = function services.cash.web.post_cash_withdrawal (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var data = req.swagger.params['data'].value;
  Cash.services.cash.web.post_cash_withdrawal(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.cash.web.put_cash_shift = function services.cash.web.put_cash_shift (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var data = req.swagger.params['data'].value;
  Cash.services.cash.web.put_cash_shift(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
