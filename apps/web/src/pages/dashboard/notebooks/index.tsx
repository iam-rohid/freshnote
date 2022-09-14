import NotebooksSidebar from "@/components/NotebooksSidebar";
import DashbaordLayout from "@/layouts/DashbaordLayout";
import { CustomNextPage } from "@/types/next";

const NotebooksPage: CustomNextPage = () => {
  return (
    <>
      <NotebooksSidebar />
      <div className="page-wrapper">Notebooks</div>
    </>
  );
};

NotebooksPage.getLayout = (page) => <DashbaordLayout>{page}</DashbaordLayout>;

export default NotebooksPage;
