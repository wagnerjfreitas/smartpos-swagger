'use strict';

var utils = require('../utils/writer.js');
var Fuelpump = require('../service/FuelpumpService');

module.exports.services.fuelpump.web.delete_fuelpump_fuelling_all_by_order = function services.fuelpump.web.delete_fuelpump_fuelling_all_by_order (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var orderId = req.swagger.params['orderId'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  Fuelpump.services.fuelpump.web.delete_fuelpump_fuelling_all_by_order(authorization,pOSToken,storeCNPJ,deviceNumber,orderId,aPKVersion,rFIDAvailable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.fuelpump.web.delete_fuelpump_fuelling_by_order = function services.fuelpump.web.delete_fuelpump_fuelling_by_order (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var fuellingId = req.swagger.params['fuellingId'].value;
  var orderId = req.swagger.params['orderId'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  Fuelpump.services.fuelpump.web.delete_fuelpump_fuelling_by_order(authorization,pOSToken,storeCNPJ,deviceNumber,fuellingId,orderId,aPKVersion,rFIDAvailable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.fuelpump.web.get_fuelpump = function services.fuelpump.web.get_fuelpump (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  Fuelpump.services.fuelpump.web.get_fuelpump(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.fuelpump.web.get_fuelpump_fuelling = function services.fuelpump.web.get_fuelpump_fuelling (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var rfid = req.swagger.params['rfid'].value;
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  Fuelpump.services.fuelpump.web.get_fuelpump_fuelling(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,username,password,rfid,page,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.fuelpump.web.get_fuelpump_fuelling_by_id = function services.fuelpump.web.get_fuelpump_fuelling_by_id (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var fuelPumpId = req.swagger.params['fuelPumpId'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var rfid = req.swagger.params['rfid'].value;
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  Fuelpump.services.fuelpump.web.get_fuelpump_fuelling_by_id(authorization,pOSToken,storeCNPJ,deviceNumber,fuelPumpId,aPKVersion,rFIDAvailable,username,password,rfid,page,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.fuelpump.web.post_fuelpump_fuelling_by_order = function services.fuelpump.web.post_fuelpump_fuelling_by_order (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var fuellingId = req.swagger.params['fuellingId'].value;
  var orderId = req.swagger.params['orderId'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  Fuelpump.services.fuelpump.web.post_fuelpump_fuelling_by_order(authorization,pOSToken,storeCNPJ,deviceNumber,fuellingId,orderId,aPKVersion,rFIDAvailable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.fuelpump.web.post_fuelpump_fuelling_order = function services.fuelpump.web.post_fuelpump_fuelling_order (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var fuellingId = req.swagger.params['fuellingId'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  Fuelpump.services.fuelpump.web.post_fuelpump_fuelling_order(authorization,pOSToken,storeCNPJ,deviceNumber,fuellingId,aPKVersion,rFIDAvailable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
