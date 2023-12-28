import UserModel, { User } from "../model/user.model";
import log from "../utils/logger";

export function createUser(input: Partial<User>) {
    log.info("dd", input)
    return UserModel.create(input);
}