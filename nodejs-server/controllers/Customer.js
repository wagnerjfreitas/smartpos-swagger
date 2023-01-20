'use strict';

var utils = require('../utils/writer.js');
var Customer = require('../service/CustomerService');

module.exports.services.customer.web.get_customer = function services.customer.web.get_customer (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var search = req.swagger.params['search'].value;
  var field = req.swagger.params['field'].value;
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  Customer.services.customer.web.get_customer(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,search,field,page,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.customer.web.get_customer_credit = function services.customer.web.get_customer_credit (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var search = req.swagger.params['search'].value;
  var paymentId = req.swagger.params['paymentId'].value;
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var rfid = req.swagger.params['rfid'].value;
  Customer.services.customer.web.get_customer_credit(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,search,paymentId,username,password,rfid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.customer.web.get_customer_driver = function services.customer.web.get_customer_driver (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var customerId = req.swagger.params['customerId'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var search = req.swagger.params['search'].value;
  Customer.services.customer.web.get_customer_driver(authorization,pOSToken,storeCNPJ,deviceNumber,customerId,aPKVersion,rFIDAvailable,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.customer.web.get_customer_fleet = function services.customer.web.get_customer_fleet (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var customerId = req.swagger.params['customerId'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var search = req.swagger.params['search'].value;
  Customer.services.customer.web.get_customer_fleet(authorization,pOSToken,storeCNPJ,deviceNumber,customerId,aPKVersion,rFIDAvailable,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
