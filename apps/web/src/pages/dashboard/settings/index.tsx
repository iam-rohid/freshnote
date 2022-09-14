import DashbaordLayout from "@/layouts/DashbaordLayout";
import { CustomNextPage } from "@/types/next";

const SettingsPage: CustomNextPage = () => {
  return <div>SettingsPage</div>;
};

SettingsPage.getLayout = (page) => <DashbaordLayout>{page}</DashbaordLayout>;

export default SettingsPage;
