import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { RetweetListRelationFilter } from "../retweet/RetweetListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  emailUser?: StringNullableFilter;
  firstName?: StringNullableFilter;
  firstNameUser?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  lastNameUser?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  passwordUser?: StringNullableFilter;
  retweets?: RetweetListRelationFilter;
  username?: StringFilter;
  usernameUser?: StringNullableFilter;
};
