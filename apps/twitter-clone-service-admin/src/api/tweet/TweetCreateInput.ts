import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { RetweetCreateNestedManyWithoutTweetsInput } from "./RetweetCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  authorTweet?: string | null;
  content?: string | null;
  contentTweet?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  retweets?: RetweetCreateNestedManyWithoutTweetsInput;
  timestamp?: Date | null;
  timestampTweet?: Date | null;
};
