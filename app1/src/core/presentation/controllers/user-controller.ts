import { applyMixins } from "@/core/utils/functions/apply-mixins";
import { CreateUserMixin } from "../mixins/create-user-mixin";

export interface UserController extends CreateUserMixin {}

export class UserController {}
applyMixins(UserController, [CreateUserMixin]);
