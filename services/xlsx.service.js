const path = require('path')
var XLSX = require('xlsx');
// console.log(__dirname)
var workbook = XLSX.readFile(path.join(__dirname, '/' + 'abc.xlsx'));
var sheet_name_list = workbook.SheetNames;
console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))