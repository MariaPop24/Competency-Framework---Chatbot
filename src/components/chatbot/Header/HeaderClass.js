import clsx from "clsx";

export const headersContainer = clsx("w-full", "fixed", "top-0");

export const headerClass = clsx(
  "flex",
  "items-center",
  "bg-neutral-700",
  "text-white",
  "shadow-md",
  "z-50"
);

export const contentClass = clsx(
  "flex",
  "items-center",
  "justify-between",
  "w-full"
);

export const menuClass = clsx("flex", "items-center");

export const menuButton = clsx(
  "flex",
  "items-center",
  "justify-center",
  "flex-col",
  "text-xs",
  "mr-4",
  "p-1"
);

export const activeHeaderButton = clsx(
  "bg-neutral-900",
  "border-b-2 border-[#fe414d]"
);
