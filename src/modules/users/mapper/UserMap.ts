import { classToClass } from "class-transformer";
import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../entities/User";

class UserMap {
  static toDTO({
    code,
    name,
    birth_date,
    avatar,
    avatar_url,
  }: User): IUserResponseDTO {
    const user = classToClass({
      code,
      name,
      birth_date,
      avatar,
      avatar_url,
    });
    return user;
  }
}

export { UserMap };
 
