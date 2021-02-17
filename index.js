function genCode() {
  let str = generatePassword()
  sessionStorage.setItem("code", str);
  console.log(`code - ${rot13(str)}`)
}

function rot13(str) {
  var codeA = "A".charCodeAt(0);
  var codeN = "N".charCodeAt(0);
  var codeZ = "Z".charCodeAt(0);
  var newArr = [];

  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code >= codeA && code <= codeZ) {
      if (code >= codeN) newArr.push(String.fromCharCode(code - 13));
      else newArr.push(String.fromCharCode(code + 13));
    } else {
      newArr.push(str[i]);
    }
  }
  return newArr.join("");
}

function generatePassword() {
  var length = 20,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
