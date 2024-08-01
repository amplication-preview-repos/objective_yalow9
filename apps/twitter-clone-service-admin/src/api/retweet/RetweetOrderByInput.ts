import { SortOrder } from "../../util/SortOrder";

export type RetweetOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  tid?: SortOrder;
  timestamp?: SortOrder;
  tweetId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
