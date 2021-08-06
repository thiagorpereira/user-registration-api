import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/users/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { LocalStorageProvider } from './StorageProvider/implementations/LocalStorageProvider';
import { S3StorageProvider } from './StorageProvider/implementations/S3StorageProvider';
import { IStorageProvider } from './StorageProvider/IStorageProvider';

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

/* const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider
}
 */

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  S3StorageProvider
)
