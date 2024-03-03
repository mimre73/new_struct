import { Container } from "inversify";
import {
  CreateUserUseCaseImpl,
  DeleteUserUseCaseImpl,
  ReadAllUsersUseCaseImpl,
  ReadUserUseCaseImpl,
  UpdateUserUseCaseImpl,
} from "@/core/application/usecases/user";
import { TYPES } from "./types";
import { IUserRepository } from "@/core/domain/repositories";
import {
  ICreateUserUseCase,
  IDeleteUserUseCase,
  IReadAllUsersUseCase,
  IReadOneUserUseCase,
  IUpdateUserUseCase,
} from "@/core/domain/usecases/user";
import { UserRepositoryImpl } from "@/core/infrastructure/repositories";

export const container = new Container();

// repository
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepositoryImpl);

// usecase
container
  .bind<ICreateUserUseCase>(TYPES.CreateUserUseCase)
  .to(CreateUserUseCaseImpl);
container
  .bind<IDeleteUserUseCase>(TYPES.DeleteUserUseCase)
  .to(DeleteUserUseCaseImpl);
container
  .bind<IReadAllUsersUseCase>(TYPES.ReadAllUsersUseCase)
  .to(ReadAllUsersUseCaseImpl);
container
  .bind<IReadOneUserUseCase>(TYPES.ReadUserUseCase)
  .to(ReadUserUseCaseImpl);
container
  .bind<IUpdateUserUseCase>(TYPES.UpdateUserUseCase)
  .to(UpdateUserUseCaseImpl);
