import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  findByName(name: string): Promise<User>,
  findById(id: string): Promise<User>,
  list(): Promise<User[]>,
  create({code, name, birth_date}: ICreateUserDTO): Promise<void>
}

export {IUsersRepository, ICreateUserDTO}
