import { Result, UseCase } from "../../generics";
import { Gender } from "../../values";

export interface IUpdateUserUseCase
  extends UseCase<Promise<Result<boolean, Error>>, UpdateUserUseCaseParam> {}

export type UpdateUserUseCaseParam = {
  uuid: string;
  name: string;
  gender: Gender;
};
