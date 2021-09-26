var retDate;
var dateVal = INPUT_ARGUMENTS.date;
retDate = new Date(dateVal).getTime() / 1000;
RESPONSE_OBJECT.OUTPUT_ARGUMENTS.unixval = retDate;