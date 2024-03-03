import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Failure, Result, Success } from "@/core/domain/generics";
import { TYPES } from "@/core/di/types";
import type { IUserRepository } from "@/core/domain/repositories";
import {
  IReadAllUsersUseCase,
  ReadAllUsersUseCaseParam,
} from "@/core/domain/usecases/user";
import { User } from "@/core/domain/entities";

@injectable()
export class ReadAllUsersUseCaseImpl implements IReadAllUsersUseCase {
  private readonly userRepository: IUserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(
    param: ReadAllUsersUseCaseParam
  ): Promise<Result<User[], Error>> {
    const result = await this.userRepository.findAll();
    if (result.isSuccess()) {
      return new Success(result.value);
    } else {
      return new Failure(result.error);
    }
  }
}
