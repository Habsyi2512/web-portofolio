import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border bg-white dark:bg-colorDarkSecond dark:border-colorDarkThird p-4 rounded-lg">
      {children}
    </div>
  );
};

export { Card };
