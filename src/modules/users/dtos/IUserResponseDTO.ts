interface IUserResponseDTO {
  code: string;
  name: string;
  birth_date: Date;
  avatar: string;
  avatar_url(): string;
}

export {IUserResponseDTO}
