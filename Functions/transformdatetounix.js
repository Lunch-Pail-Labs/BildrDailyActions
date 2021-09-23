var retDate =null;
var dateVal = INPUT_ARGUMENTS.date;
if (bapi.helper.isDate(dateVal)) retDate = new Date(dateVal).getTime() / 1000;
RESPONSE_OBJECT.OUTPUT_ARGUMENTS.unixval = retDate;