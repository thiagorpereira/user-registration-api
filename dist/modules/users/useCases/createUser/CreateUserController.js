"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;

var _tsyringe = require("tsyringe");

var _CreateUserUseCase = require("./CreateUserUseCase");

class CreateUserController {
  async handle(request, response) {
    const data = request.body;
    let avatar_file = "";

    if (request.file && request.file.filename) {
      avatar_file = request.file.filename;
    }

    const createUserUseCase = _tsyringe.container.resolve(_CreateUserUseCase.CreateUserUseCase);

    await createUserUseCase.execute(data, avatar_file);
    return response.status(201).send();
  }

}

exports.CreateUserController = CreateUserController;