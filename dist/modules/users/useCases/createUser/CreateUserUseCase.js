"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IStorageProvider = require("../../../../shared/container/StorageProvider/IStorageProvider");

var _IUsersRepository = require("../../repositories/IUsersRepository");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let CreateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("StorageProvider")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUsersRepository === "undefined" ? Object : _IUsersRepository.IUsersRepository, typeof _IStorageProvider.IStorageProvider === "undefined" ? Object : _IStorageProvider.IStorageProvider]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateUserUseCase {
  constructor(usersRepository, storageProvider) {
    this.usersRepository = usersRepository;
    this.storageProvider = storageProvider;
  }

  async execute(data, avatar_file) {
    const {
      name
    } = data;
    const userAlreadyExists = await this.usersRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }

    if (avatar_file) {
      Object.assign(data, {
        avatar: avatar_file
      });
      await this.storageProvider.save(avatar_file, "avatar");
    }

    await this.usersRepository.create(data);
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.CreateUserUseCase = CreateUserUseCase;