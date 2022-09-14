import DashbaordLayout from "@/layouts/DashbaordLayout";
import { CustomNextPage } from "@/types/next";

const FavoritesPage: CustomNextPage = () => {
  return <div>FavoritesPage</div>;
};

FavoritesPage.getLayout = (page) => <DashbaordLayout>{page}</DashbaordLayout>;

export default FavoritesPage;
