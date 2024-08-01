import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FollowWhereInput = {
  follower?: StringNullableFilter;
  following?: StringNullableFilter;
  fuid?: IntNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  uid?: IntNullableFilter;
};
