'use strict';

var utils = require('../utils/writer.js');
var Device = require('../service/DeviceService');

module.exports.services.device.web.post_device_log = function services.device.web.post_device_log (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var pOSToken = req.swagger.params['POS-Token'].value;
  var storeCNPJ = req.swagger.params['Store-CNPJ'].value;
  var deviceNumber = req.swagger.params['Device-Number'].value;
  var aPKVersion = req.swagger.params['APK-Version'].value;
  var rFIDAvailable = req.swagger.params['RFID-Available'].value;
  var data = req.swagger.params['data'].value;
  Device.services.device.web.post_device_log(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
