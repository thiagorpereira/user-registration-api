import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    let avatar_file = ""
    if (request.file.filename) {
      console.log('exists', request.file.filename);
      avatar_file = request.file.filename;
    }

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute(data, avatar_file);

    return response.status(201).send();
  }
}

export {CreateUserController}
