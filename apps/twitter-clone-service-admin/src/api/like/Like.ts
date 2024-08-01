import { Tweet } from "../tweet/Tweet";
import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  tid: number | null;
  timestamp: Date | null;
  tweet?: Tweet | null;
  uid: number | null;
  updatedAt: Date;
  user?: User | null;
};
