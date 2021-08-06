"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMap = void 0;

var _classTransformer = require("class-transformer");

class UserMap {
  static toDTO({
    code,
    name,
    birth_date,
    avatar,
    avatar_url
  }) {
    const user = (0, _classTransformer.classToClass)({
      code,
      name,
      birth_date,
      avatar,
      avatar_url
    });
    return user;
  }

}

exports.UserMap = UserMap;