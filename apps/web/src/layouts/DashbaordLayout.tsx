import DashbaordSidebar from "@/components/DashbaordSidebar";
import { FC, ReactNode } from "react";

export interface DashbaordLayoutProps {
  children: ReactNode;
}

const DashbaordLayout: FC<DashbaordLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="dashboard-layout">
      <DashbaordSidebar />
      <main className="dashboard-body">{children}</main>
    </div>
  );
};

export default DashbaordLayout;
