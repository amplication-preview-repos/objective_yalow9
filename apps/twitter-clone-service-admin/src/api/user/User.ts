import { Like } from "../like/Like";
import { Retweet } from "../retweet/Retweet";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  emailUser: string | null;
  firstName: string | null;
  firstNameUser: string | null;
  id: string;
  lastName: string | null;
  lastNameUser: string | null;
  likes?: Array<Like>;
  passwordUser: string | null;
  retweets?: Array<Retweet>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  usernameUser: string | null;
};
