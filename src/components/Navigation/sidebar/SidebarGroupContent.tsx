import React from "react";

export default function SidebarMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul>{children}</ul>;
}
