import { Failure, Result, Success } from "@/core/domain/generics";
import { injectable } from "inversify";
import "reflect-metadata";
import { User } from "../../domain/entities/user";
import { IUserRepository } from "@/core/domain/repositories";
import { Gender } from "@/core/domain/values";

@injectable()
export class UserRepositoryImpl implements IUserRepository {
  async create(params: {
    name: string;
    gender: Gender;
  }): Promise<Result<boolean, Error>> {
    // call create api
    console.log("CREATE USER ", params);
    let success = true;
    if (success) {
      return new Success(true);
    } else {
      return new Failure(new Error());
    }
  }

  async delete(param: { uuid: string }): Promise<Result<boolean, Error>> {
    // call delete api
    let success = true;
    if (success) {
      return new Success(true);
    } else {
      return new Failure(new Error());
    }
  }

  async findAll(): Promise<Result<User[], Error>> {
    // call find all api
    let success = true;
    if (success) {
      return new Success([]);
    } else {
      return new Failure(new Error());
    }
  }

  async findById(params: { uuid: string }): Promise<Result<User, Error>> {
    // call find one api
    let success = true;
    if (success) {
      return new Success(
        new User({
          name: "abbas",
          createdAt: new Date(),
          gender: "male",
          updatedAt: new Date(),
          uuid: "aaasdasdasdsa",
        })
      );
    } else {
      return new Failure(new Error());
    }
  }

  async update(params: {
    uuid: string;
    name: string;
    gender: Gender;
  }): Promise<Result<boolean, Error>> {
    // call update api
    let success = true;
    if (success) {
      return new Success(true);
    } else {
      return new Failure(new Error());
    }
  }
}
