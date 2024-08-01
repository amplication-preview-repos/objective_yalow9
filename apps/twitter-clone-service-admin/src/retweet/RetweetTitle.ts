import { Retweet as TRetweet } from "../api/retweet/Retweet";

export const RETWEET_TITLE_FIELD = "content";

export const RetweetTitle = (record: TRetweet): string => {
  return record.content?.toString() || String(record.id);
};
