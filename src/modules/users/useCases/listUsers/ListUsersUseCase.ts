import { inject, injectable } from "tsyringe";
import { IUserResponseDTO } from "../../dtos/IUserResponseDTO";
import { User } from "../../entities/User";
import { UserMap } from "../../mapper/UserMap";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }
  
  async execute(): Promise<IUserResponseDTO[]> {
    const users = await this.usersRepository.list();
    const usersTranform = users.map(user => user = UserMap.toDTO(user))
    return usersTranform;
  }
}

export {ListUsersUseCase}
