import ProjectSidebar from "@/components/ProjectSidebar";
import { FC, ReactNode } from "react";

export interface ProjectLayoutProps {
  children: ReactNode;
}

const ProjectLayout: FC<ProjectLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="project-layout">
      <ProjectSidebar />
      <main className="project-body">{children}</main>
    </div>
  );
};

export default ProjectLayout;
