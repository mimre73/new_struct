import { Result, UseCase } from "../../generics";
import { User } from "../../entities";

export interface IReadOneUserUseCase
  extends UseCase<Promise<Result<User, Error>>, ReadOneUserUseCaseParam> {}

export type ReadOneUserUseCaseParam = {
  uuid: string;
};
