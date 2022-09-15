import DashbaordHeader from "@/components/DashbaordHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import { FC, ReactNode } from "react";

export interface DashbaordLayoutProps {
  children: ReactNode;
}

const DashbaordLayout: FC<DashbaordLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <DashboardSidebar />
      <div className="ml-64">
        <DashbaordHeader />
        {children}
      </div>
    </>
  );
};

export default DashbaordLayout;
