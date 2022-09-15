import ProjectLayout from "@/layouts/ProjectLayout";
import { CustomNextPage } from "@/types/next";

const SettingsPage: CustomNextPage = () => {
  return <div>SettingsPage</div>;
};

SettingsPage.getLayout = (page) => <ProjectLayout>{page}</ProjectLayout>;

export default SettingsPage;
