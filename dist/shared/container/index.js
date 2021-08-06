"use strict";

var _tsyringe = require("tsyringe");

var _UsersRepository = require("../../modules/users/repositories/implementations/UsersRepository");

var _S3StorageProvider = require("./StorageProvider/implementations/S3StorageProvider");

_tsyringe.container.registerSingleton("UsersRepository", _UsersRepository.UsersRepository);
/* const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider
}
 */


_tsyringe.container.registerSingleton("StorageProvider", _S3StorageProvider.S3StorageProvider);