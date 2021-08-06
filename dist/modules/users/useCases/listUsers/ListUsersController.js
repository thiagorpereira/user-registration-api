"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUsersController = void 0;

var _tsyringe = require("tsyringe");

var _ListUsersUseCase = require("./ListUsersUseCase");

class ListUsersController {
  async handle(request, response) {
    const listUsersUseCase = _tsyringe.container.resolve(_ListUsersUseCase.ListUsersUseCase);

    const all = await listUsersUseCase.execute();
    return response.json(all);
  }

}

exports.ListUsersController = ListUsersController;