import { Result, UseCase } from "../../generics";

export interface IDeleteUserUseCase
  extends UseCase<Promise<Result<boolean, Error>>, DeleteUserUseCaseParam> {}

export type DeleteUserUseCaseParam = {
  uuid: string;
};
