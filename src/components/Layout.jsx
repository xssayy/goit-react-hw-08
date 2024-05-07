import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div style={{ padding: "0 16px" }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
