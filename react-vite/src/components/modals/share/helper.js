import CryptoJS from "crypto-js/";

export function exportCode(build) {
  return CryptoJS.AES.encrypt(JSON.stringify(build), "shadowheart").toString();
}

export function importCode(code) {
  const bytes = CryptoJS.AES.decrypt(code, "shadowheart");
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
