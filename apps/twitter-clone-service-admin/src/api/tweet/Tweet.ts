import { Like } from "../like/Like";
import { Retweet } from "../retweet/Retweet";

export type Tweet = {
  author: string | null;
  authorTweet: string | null;
  content: string | null;
  contentTweet: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  retweets?: Array<Retweet>;
  timestamp: Date | null;
  timestampTweet: Date | null;
  updatedAt: Date;
};
