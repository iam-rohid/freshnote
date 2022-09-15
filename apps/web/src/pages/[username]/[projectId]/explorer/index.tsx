import NotebooksSidebar from "@/components/NotebooksSidebar";
import ProjectLayout from "@/layouts/ProjectLayout";
import { CustomNextPage } from "@/types/next";

const Explorer: CustomNextPage = () => {
  return (
    <>
      <NotebooksSidebar />
      <div className="page-wrapper">Notebooks</div>
    </>
  );
};

Explorer.getLayout = (page) => <ProjectLayout>{page}</ProjectLayout>;

export default Explorer;
