import { Result, UseCase } from "../../generics";
import { Gender } from "../../values";

export interface ICreateUserUseCase
  extends UseCase<Promise<Result<boolean, Error>>, CreateUserUseCaseParam> {}

export type CreateUserUseCaseParam = {
  name: string;
  gender: Gender;
};
