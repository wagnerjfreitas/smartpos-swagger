'use strict';

var utils = require('../utils/writer.js');
var Employee = require('../service/EmployeeService');

module.exports.services.employee.web.get_employee = function services.employee.web.get_employee (req, res, next) {
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
  Employee.services.employee.web.get_employee(authorization,pOSToken,storeCNPJ,deviceNumber,aPKVersion,rFIDAvailable,search,field,page,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
