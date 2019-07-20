const crypto = require("crypto");

const SaltLength = 9

module.exports = class Encoder {

  static MD5_encrypt(data){
    var salt = this.generateSalt(SaltLength);
    var hash = this.md5(data + salt);
    return salt + hash;
  }

  static MD5_validate(data , encryption){
    var salt = encryption.substr(0, SaltLength);
    var validHash = salt + this.md5(data + salt);
    return encryption === validHash;
  }

  static generateSalt(len) {
    var set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ',
        setLen = set.length,
        salt = '';
    for (var i = 0; i < len; i++) {
      var p = Math.floor(Math.random() * setLen);
      salt += set[p];
    }
    return salt;
  }

  static md5(string) {
    return crypto.createHash('md5').update(string).digest('hex');
  }

}
