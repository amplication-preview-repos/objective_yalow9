import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  tid?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
  tweet?: TweetWhereUniqueInput;
  uid?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
