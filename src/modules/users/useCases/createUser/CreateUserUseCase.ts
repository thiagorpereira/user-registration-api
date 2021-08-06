import { inject, injectable } from "tsyringe";
import { ICreateUserDTO, IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  
  async execute(data: ICreateUserDTO, avatar_file: string): Promise<void> {
    const { name } = data;
    Object.assign(data, {
      avatar: avatar_file
    })

    const userAlreadyExists = await this.usersRepository.findByName(name);
    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }

    await this.usersRepository.create(data);
  }

}

export {CreateUserUseCase}
