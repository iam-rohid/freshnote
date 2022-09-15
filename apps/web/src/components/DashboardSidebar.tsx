import Link from "next/link";
import clsx from "clsx";

type SidebarLink = {
  type: "link";
  href: string;
  isBlank?: boolean;
};

type SidebarButton = {
  type: "button";
  onClick?: () => void;
};

type SidebarItem = (SidebarLink | SidebarButton) & {
  label: string;
};

interface Section {
  id?: string;
  title?: string;
  items: SidebarItem[];
}

const sections: Section[] = [
  {
    items: [
      {
        type: "link",
        href: "/dashboard",
        label: "Dashboard",
      },
      {
        type: "link",
        href: "projects",
        label: "My Projects",
      },
    ],
  },
  {
    id: "account",
    title: "Account",
    items: [
      {
        type: "link",
        href: "/account/preferences",
        label: "Preferences",
      },
    ],
  },
  {
    items: [
      {
        type: "button",
        label: "Logout",
        onClick: () => {
          // alert("Logout Click");
        },
      },
    ],
  },
];
const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 z-20 h-full w-64 border-r border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-800">
      <header className="flex h-12 items-center px-6">
        <Link href="/dashboard">
          <a className="font-medium">FreshCMS</a>
        </Link>
      </header>
      <div>
        {sections.map((section, si) => (
          <section key={si} className="my-6 px-6">
            {!!section.title && (
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {section.title}
              </p>
            )}
            <nav>
              <ul className="flex flex-col gap-px">
                {section.items.map((item, i) => (
                  <li key={i}>
                    {item.type === "link" ? (
                      <Link href={item.href} passHref>
                        <a>
                          <SidebarItem data={item} />
                        </a>
                      </Link>
                    ) : (
                      <SidebarItem data={item} />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        ))}
      </div>
    </aside>
  );
};

export default DashboardSidebar;

const SidebarItem = ({
  data,
  isActive,
}: {
  data: SidebarItem;
  isActive?: boolean;
}) => {
  return (
    <div
      className={clsx([
        "-ml-4 -mr-4 flex cursor-pointer select-none items-center gap-2 rounded-md px-4 py-1.5",
        {
          "bg-gray-200 dark:bg-gray-700": isActive,
          "text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100":
            !isActive,
        },
      ])}
    >
      {data.label}
    </div>
  );
};
