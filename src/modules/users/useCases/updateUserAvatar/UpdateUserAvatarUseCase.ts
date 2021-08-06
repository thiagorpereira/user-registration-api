import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/StorageProvider/IStorageProvider";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
  avatar_file: string;
  code: string;
  name: string;
  birth_date: Date;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) { }
  
  async execute({ id, avatar_file, code, name, birth_date }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (avatar_file) {
      if (user.avatar) {
        await this.storageProvider.delete(user.avatar, "avatar");
      }
      await this.storageProvider.save(avatar_file, "avatar");
      user.avatar = avatar_file;
    }
    
    user.code = code;
    user.name = name;
    user.birth_date = birth_date;
    await this.usersRepository.create(user);
  }
}

export {UpdateUserAvatarUseCase}
