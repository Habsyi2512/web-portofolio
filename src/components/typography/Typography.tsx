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
      className={`text-2xl sm:text-3xl font-extrabold tracking-wide text-colorDarkFirst dark:text-colorDarkThird mb-5 ${className}`}
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
      className={`text-xl font-bold tracking-wide text-colorDarkFirst dark:text-colorDarkThird mb-2 ${className}`}
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
  return (
    <p className={`text-colorDarkSecond dark:text-colorDarkThird ${className}`}>
      {children}
    </p>
  );
}

export { TextTitle, TextSubtitle, Paragraph };
