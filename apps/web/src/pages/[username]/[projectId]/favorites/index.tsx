import ProjectLayout from "@/layouts/ProjectLayout";
import { CustomNextPage } from "@/types/next";

const FavoritesPage: CustomNextPage = () => {
  return <div>FavoritesPage</div>;
};

FavoritesPage.getLayout = (page) => <ProjectLayout>{page}</ProjectLayout>;

export default FavoritesPage;
