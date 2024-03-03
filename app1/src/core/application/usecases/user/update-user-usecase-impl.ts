import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Failure, Result, Success } from "@/core/domain/generics";
import { TYPES } from "@/core/di/types";
import type { IUserRepository } from "@/core/domain/repositories";
import {
  IUpdateUserUseCase,
  UpdateUserUseCaseParam,
} from "@/core/domain/usecases/user";

@injectable()
export class UpdateUserUseCaseImpl implements IUpdateUserUseCase {
  private readonly userRepository: IUserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(
    param: UpdateUserUseCaseParam
  ): Promise<Result<boolean, Error>> {
    const result = await this.userRepository.update({
      uuid: param.uuid,
      name: param.name,
      gender: param.gender,
    });
    if (result.isSuccess()) {
      return new Success(true);
    } else {
      return new Failure(result.error);
    }
  }
}
