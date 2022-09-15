import DashbaordLayout from "@/layouts/DashbaordLayout";
import { CustomNextPage } from "@/types/next";
import { GetServerSideProps } from "next";

const Dashbaord: CustomNextPage = () => {
  return (
    <div className="my-6 space-y-6 px-6">
      <section>
        <button className="bg-primary-500 ring-primary-500 hover:bg-primary-600 rounded-md py-1.5 px-2.5 font-medium text-white">
          New Project
        </button>
      </section>

      <section>
        <div className="mb-2 flex h-10 items-center">
          <p className="flex-1 text-lg font-medium">Projects</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <div className="relative flex flex-col gap-4 rounded-lg bg-white p-6 ring-1 ring-transparent hover:ring-gray-200 dark:bg-gray-800 dark:hover:ring-gray-700">
            <a href="#" className="absolute inset-0 h-full w-full rounded-lg" />
            <div>
              <h3 className="font-medium">My Blog</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                github.com/rohid-dev/my-blog
              </p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p>Updated 4d ago</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-4 rounded-lg bg-white p-6 ring-1 ring-transparent hover:ring-gray-200 dark:bg-gray-800 dark:hover:ring-gray-700">
            <a href="#" className="absolute inset-0 h-full w-full rounded-lg" />
            <div>
              <h3 className="font-medium">My Blog</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                github.com/rohid-dev/my-blog
              </p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p>Updated 4d ago</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-4 rounded-lg bg-white p-6 ring-1 ring-transparent hover:ring-gray-200 dark:bg-gray-800 dark:hover:ring-gray-700">
            <a href="#" className="absolute inset-0 h-full w-full rounded-lg" />
            <div>
              <h3 className="font-medium">My Blog</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                github.com/rohid-dev/my-blog
              </p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p>Updated 4d ago</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Dashbaord.getLayout = (page) => <DashbaordLayout>{page}</DashbaordLayout>;

export default Dashbaord;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
