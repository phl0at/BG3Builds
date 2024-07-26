import CryptoJS from "crypto-js/";

export function BuildCodeGenerator(build) {
    
  const code = CryptoJS.AES.encrypt(JSON.stringify(build), "bg").toString();

  return code;
}
