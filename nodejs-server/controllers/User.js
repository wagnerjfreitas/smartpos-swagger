'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.services.user.web.get_user_permission = function services.user.web.get_user_permission (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var rfid = req.swagger.params['rfid'].value;
  User.services.user.web.get_user_permission(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,username,password,rfid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.user.web.post_user_login = function services.user.web.post_user_login (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var data = req.swagger.params['data'].value;
  User.services.user.web.post_user_login(authorization,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.services.user.web.post_user_logout = function services.user.web.post_user_logout (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  User.services.user.web.post_user_logout(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
