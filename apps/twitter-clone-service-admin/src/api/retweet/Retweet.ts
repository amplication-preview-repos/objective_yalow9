import { Tweet } from "../tweet/Tweet";
import { User } from "../user/User";

export type Retweet = {
  content: string | null;
  createdAt: Date;
  id: string;
  tid: number | null;
  timestamp: Date | null;
  tweet?: Tweet | null;
  updatedAt: Date;
  user?: User | null;
};
