import { format, formatDistanceToNow } from "date-fns";

export const formatPostDate = (date) => format(date, "do MMM, YYYY");
export const formatTimePassed = (date) => formatDistanceToNow(date);
