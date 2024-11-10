import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border bg-white dark:bg-colorDarkFirst dark:border-colorDarkThird p-4 rounded">
      {children}
    </div>
  );
};

export { Card };
