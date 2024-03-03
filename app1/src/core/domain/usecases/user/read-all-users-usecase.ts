import { Result, UseCase } from "../../generics";
import { User } from "../../entities";

export interface IReadAllUsersUseCase
  extends UseCase<Promise<Result<User[], Error>>, ReadAllUsersUseCaseParam> {}

export type ReadAllUsersUseCaseParam = {};
