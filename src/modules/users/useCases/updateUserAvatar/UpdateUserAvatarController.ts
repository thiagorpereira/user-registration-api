import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response) : Promise<Response> {
    
    const { id } = request.params;

    let avatar_file = ""
    if (request.file && request.file.filename) {
      avatar_file = request.file.filename;
    }

    const { code, name, birth_date } = request.body;
    
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

    await updateUserAvatarUseCase.execute({ id, avatar_file, code, name, birth_date })
    return response.status(204).send();
  }
}

export { UpdateUserAvatarController }
