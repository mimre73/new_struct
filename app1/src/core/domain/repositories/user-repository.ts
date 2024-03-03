import { Result } from "@/core/domain/generics";
import { User } from "@/core/domain/entities";
import { Gender } from "@/core/domain/values";

export interface IUserRepository {
  create(params: {
    name: string;
    gender: Gender;
  }): Promise<Result<boolean, Error>>;

  findById(params: { uuid: string }): Promise<Result<User, Error>>;

  findAll(): Promise<Result<User[], Error>>;

  update(params: {
    uuid: string;
    name: string;
    gender: Gender;
  }): Promise<Result<boolean, Error>>;

  delete(param: { uuid: string }): Promise<Result<boolean, Error>>;
}
