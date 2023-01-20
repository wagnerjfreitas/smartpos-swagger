'use strict';

var utils = require('../utils/writer.js');
var Setting = require('../service/SettingService');

module.exports.services.setting.web.get_setting = function services.setting.web.get_setting (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  Setting.services.setting.web.get_setting(authorization,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
