import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Failure, Result, Success } from "@/core/domain/generics";
import { TYPES } from "@/core/di/types";
import type { IUserRepository } from "@/core/domain/repositories";
import {
  IDeleteUserUseCase,
  DeleteUserUseCaseParam,
} from "@/core/domain/usecases/user";

@injectable()
export class DeleteUserUseCaseImpl implements IDeleteUserUseCase {
  private readonly userRepository: IUserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(
    param: DeleteUserUseCaseParam
  ): Promise<Result<boolean, Error>> {
    const result = await this.userRepository.delete({ uuid: param.uuid });
    if (result.isSuccess()) {
      return new Success(true);
    } else {
      return new Failure(result.error);
    }
  }
}
