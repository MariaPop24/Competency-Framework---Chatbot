import clsx from "clsx";

export const chatHistoryClass = clsx(
  "relative",
  "bg-white",
  "p-3",
  "border border-neutral-200",
  "max-h-96",
  "rounded-sm",
  "w-1/5",
  "flex",
  "item-center",
  "justify-center",
  "shadow-sm",
  "mt-20",
  "font-semibold"
);

export const newDiscussionButton = clsx(
  "bg-white",
  "text-blue-400",
  "py-2",
  "px-4",
  "rounded-sm",
  "border border-neutral-200",
  "shadow-sm",
  "absolute -top-8",
  "w-[80%]",
  "text-center",
  "truncate"
);

export const chatsContainer = clsx("overflow-y-scroll", "w-full");

export const cardClass = clsx(
  "!border border-neutral-200",
  "!px-1",
  "!py-1",
  "!mb-1"
);

export const cardContentClass = clsx("!px-1", "!py-1");
