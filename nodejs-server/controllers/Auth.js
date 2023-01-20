'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.services.auth.web.post_auth_partner = function services.auth.web.post_auth_partner (req, res, next) {
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var data = req.swagger.params['data'].value;
  Auth.services.auth.web.post_auth_partner(storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
