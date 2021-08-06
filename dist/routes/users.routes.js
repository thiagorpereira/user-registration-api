"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersRoutes = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _CreateUserController = require("../modules/users/useCases/createUser/CreateUserController");

var _UpdateUserAvatarController = require("../modules/users/useCases/updateUserAvatar/UpdateUserAvatarController");

var _upload = _interopRequireDefault(require("../config/upload"));

var _ListUsersController = require("../modules/users/useCases/listUsers/ListUsersController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRoutes = (0, _express.Router)();
exports.usersRoutes = usersRoutes;
const uploadAvatar = (0, _multer.default)(_upload.default);
const createUserController = new _CreateUserController.CreateUserController();
const updateUserAvatarController = new _UpdateUserAvatarController.UpdateUserAvatarController();
const listUsersController = new _ListUsersController.ListUsersController();
usersRoutes.post("/", uploadAvatar.single("avatar"), createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.put("/avatar/:id", uploadAvatar.single("avatar"), updateUserAvatarController.handle);