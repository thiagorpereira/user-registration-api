"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserAvatarController = void 0;

var _tsyringe = require("tsyringe");

var _UpdateUserAvatarUseCase = require("./UpdateUserAvatarUseCase");

class UpdateUserAvatarController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    let avatar_file = "";

    if (request.file && request.file.filename) {
      avatar_file = request.file.filename;
    }

    const {
      code,
      name,
      birth_date
    } = request.body;

    const updateUserAvatarUseCase = _tsyringe.container.resolve(_UpdateUserAvatarUseCase.UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({
      id,
      avatar_file,
      code,
      name,
      birth_date
    });
    return response.status(204).send();
  }

}

exports.UpdateUserAvatarController = UpdateUserAvatarController;