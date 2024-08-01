import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  follower?: SortOrder;
  following?: SortOrder;
  fuid?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  uid?: SortOrder;
  updatedAt?: SortOrder;
};
