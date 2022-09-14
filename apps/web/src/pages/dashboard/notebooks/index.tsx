import DashbaordLayout from "@/layouts/DashbaordLayout";
import { CustomNextPage } from "@/types/next";

const NotebooksPage: CustomNextPage = () => {
  return <div>Notebooks</div>;
};

NotebooksPage.getLayout = (page) => <DashbaordLayout>{page}</DashbaordLayout>;

export default NotebooksPage;
