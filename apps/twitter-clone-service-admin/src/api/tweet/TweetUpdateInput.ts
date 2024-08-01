import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { RetweetUpdateManyWithoutTweetsInput } from "./RetweetUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  author?: string | null;
  authorTweet?: string | null;
  content?: string | null;
  contentTweet?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  retweets?: RetweetUpdateManyWithoutTweetsInput;
  timestamp?: Date | null;
  timestampTweet?: Date | null;
};
