import React from "react";

export default function SidebarGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mb-4">{children}</div>;
}
