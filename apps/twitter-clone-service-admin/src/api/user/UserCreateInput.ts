import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { RetweetCreateNestedManyWithoutUsersInput } from "./RetweetCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  emailUser?: string | null;
  firstName?: string | null;
  firstNameUser?: string | null;
  lastName?: string | null;
  lastNameUser?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  passwordUser?: string | null;
  retweets?: RetweetCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  usernameUser?: string | null;
};
