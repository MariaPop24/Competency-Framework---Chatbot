import clsx from "clsx";

export const chatHistoryClass = clsx(
  "relative",
  "bg-white",
  "p-3",
  "pr-0",
  "border border-neutral-200",
  "rounded-sm",
  "w-[25%]",
  "flex",
  "item-center",
  "justify-center",
  "shadow-sm",
  "mt-5",
  "font-semibold"
);

export const newDiscussionButton = clsx(
  "bg-white",
  "transition duration-200 ease-in-out hover:bg-neutral-200",
  "text-blue-400",
  "py-2",
  "px-4",
  "rounded-sm",
  "border border-neutral-200",
  "shadow-sm",
  "absolute -top-3",
  "w-[90%]",
  "text-center",
  "truncate",
  "left-[5%]"
);

export const chatsContainer = clsx("overflow-y-scroll", "w-full", "mt-5");

export const cardClass = clsx(
  "!border border-neutral-200",
  "!px-2",
  "!py-3",
  "!mb-1",
  "!transition",
  "!duration-200",
  "!ease-in-out",
  "hover:bg-neutral-800"
);

export const cardContentClass = clsx("!px-1", "!py-1");
