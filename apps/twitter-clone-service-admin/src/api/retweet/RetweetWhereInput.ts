import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RetweetWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  tid?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
  tweet?: TweetWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
