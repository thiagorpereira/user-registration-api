import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";

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
    private usersRepository: IUsersRepository
  ) { }
  
  async execute({ id, avatar_file, code, name, birth_date }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`)
    }
    user.avatar = avatar_file;
    user.code = code;
    user.name = name;
    user.birth_date = birth_date;
    await this.usersRepository.create(user);
  }
}

export {UpdateUserAvatarUseCase}
