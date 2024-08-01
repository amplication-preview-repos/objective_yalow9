import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  tid?: number | null;
  timestamp?: Date | null;
  tweet?: TweetWhereUniqueInput | null;
  uid?: number | null;
  user?: UserWhereUniqueInput | null;
};
