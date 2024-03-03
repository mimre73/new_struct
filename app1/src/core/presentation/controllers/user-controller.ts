import { applyMixins } from "@/core/utils/functions/apply-mixins";

export interface UserController extends CreateUserMixin {}

export class UserController {}
applyMixins(UserController, [CreateUserMixin]);
