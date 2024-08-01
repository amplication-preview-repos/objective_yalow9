import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  tid?: number | null;
  timestamp?: Date | null;
  tweet?: TweetWhereUniqueInput | null;
  uid?: number | null;
  user?: UserWhereUniqueInput | null;
};
