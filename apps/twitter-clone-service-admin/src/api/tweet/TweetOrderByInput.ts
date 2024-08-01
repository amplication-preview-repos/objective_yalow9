import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  author?: SortOrder;
  authorTweet?: SortOrder;
  content?: SortOrder;
  contentTweet?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  timestampTweet?: SortOrder;
  updatedAt?: SortOrder;
};
