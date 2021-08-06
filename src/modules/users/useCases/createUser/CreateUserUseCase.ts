import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/StorageProvider/IStorageProvider";
import { ICreateUserDTO, IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) { }
  
  async execute(data: ICreateUserDTO, avatar_file: string): Promise<void> {
    const { name } = data;

    const userAlreadyExists = await this.usersRepository.findByName(name);
    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }
    if (avatar_file) {
      Object.assign(data, {
        avatar: avatar_file
      })
      await this.storageProvider.save(avatar_file, "avatar");
    }

    await this.usersRepository.create(data);
  }

}

export {CreateUserUseCase}
