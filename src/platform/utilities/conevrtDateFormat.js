export function setDateFormat(dateval) {
  let etaVal = dateval.split('-');
  let val = etaVal[1];
  switch (val) {
    case 'Jan':  val = "01";
      break;
    case 'Feb':  val = "02";
      break;
    case 'Mar':  val = "03";
      break;
    case 'Apr':  val = "04";
      break;
    case 'May':  val = "05";
      break;
    case 'Jun':  val = "06";
      break;
    case 'Jul':  val = "07";
      break;
    case 'Aug':  val = "08";
      break;
    case 'Sep':  val = "09";
      break;
    case 'Oct': val = "10";
      break;
    case 'Nov': val = "11";
      break;
    case 'Dec': val = "12";
      break;
    default: val = "00";
      break;
  }
  etaVal[1] = val;
  val = etaVal.toString();
  return val.replace(new RegExp(',', 'gi'), '-');
};