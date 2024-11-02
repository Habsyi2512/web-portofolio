import React from "react";

export default function BoxContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mb-16">{children}</div>;
}
