import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/users/useCases/updateUserAvatar/UpdateUserAvatarController';
import uploadConfig from "../config/upload";
import { ListUsersController } from '../modules/users/useCases/listUsers/ListUsersController';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const listUsersController = new ListUsersController();

usersRoutes.post("/", uploadAvatar.single("avatar"), createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.put("/avatar/:id", uploadAvatar.single("avatar"), updateUserAvatarController.handle)

export { usersRoutes }
