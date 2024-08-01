import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { RetweetListRelationFilter } from "../retweet/RetweetListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TweetWhereInput = {
  author?: StringNullableFilter;
  authorTweet?: StringNullableFilter;
  content?: StringNullableFilter;
  contentTweet?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  retweets?: RetweetListRelationFilter;
  timestamp?: DateTimeNullableFilter;
  timestampTweet?: DateTimeNullableFilter;
};
