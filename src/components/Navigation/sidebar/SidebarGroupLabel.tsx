import React from "react";

export default function SidebarGroupLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-1 text-colorDarkFirst  dark:text-colorDarkThird text-md font-semibold">
      {children}
    </h2>
  );
}
