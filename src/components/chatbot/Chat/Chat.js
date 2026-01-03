import clsx from "clsx";

export const chatContainer = clsx(
  "relative",
  "w-full",
  "p-5",
  "flex",
  "flex-col items-center"
);

export const initialText = clsx("text-3xl font-bold", "absolute top-[25%]");

export const inputWrapper = clsx("absolute bottom-2 left-0 right-0 px-3");

export const textareaWrapper = clsx(
  "flex items-end gap-2 rounded-md border border-neutral-200 bg-white px-4 py-3"
);

export const textareaClass = clsx(
  "w-full",
  "resize-none",
  "overflow-hidden",
  "bg-transparent",
  "outline-none",
  "text-sm"
);

export const sendButtonClass = clsx(
  "h-8",
  "w-8",
  "rounded-full",
  "bg-gray-900",
  "text-white"
);
