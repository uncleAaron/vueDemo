function name(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = {optionData : "helloC"};
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = name;
