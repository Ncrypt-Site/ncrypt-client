import React from "react";
import { Header } from "./Header";

interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({}) => {
  return (
    <div>
      <Header />
    </div>
  );
};
