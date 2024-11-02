import React from "react";

function TextTitle({
  title = "Title",
  className = "",
  props,
}: {
  title: string;
  className?: string;
  props?: React.HTMLAttributes<Element>;
}) {
  return (
    <h1
      {...props}
      className={`text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5 ${className}`}
    >
      {title}
    </h1>
  );
}

function TextSubtitle({
  title = "Title",
  className = "",
  props,
}: {
  title: string;
  className?: string;
  props?: React.HTMLAttributes<Element>;
}) {
  return (
    <h1
      {...props}
      className={`text-xl font-bold text-slate-900 mb-2 ${className}`}
    >
      {title}
    </h1>
  );
}

function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-slate-700 ${className}`}>{children}</p>;
}

export { TextTitle, TextSubtitle, Paragraph };
