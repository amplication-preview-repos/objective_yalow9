import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { RetweetUpdateManyWithoutUsersInput } from "./RetweetUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  emailUser?: string | null;
  firstName?: string | null;
  firstNameUser?: string | null;
  lastName?: string | null;
  lastNameUser?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  passwordUser?: string | null;
  retweets?: RetweetUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  usernameUser?: string | null;
};
