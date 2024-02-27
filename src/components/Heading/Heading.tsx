import React from "react";

function Heading({ children }: { children: React.ReactNode }) {
  return <div className="font-bold text-3xl text-center my-12">{children}</div>;
}

export default Heading;
