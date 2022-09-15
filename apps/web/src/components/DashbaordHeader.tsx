import Image from "next/image";
import Link from "next/link";

const DashbaordHeader = () => {
  return (
    <header className="sticky top-0 z-20 bg-gray-100/50 backdrop-blur-md dark:bg-gray-900/50">
      <div className="flex h-12 items-center gap-6 px-6">
        <ul className="flex items-center gap-2">
          <li>
            <Link href="/">
              <a className="font-medium">Freshnote</a>
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link href="/dashboard">
              <a className="font-medium">Dashboard</a>
            </Link>
          </li>
        </ul>

        <nav className="flex-1">
          <ul className="flex items-center justify-end gap-4">
            <li>
              <Link href={"#"}>
                <a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                  Docs
                </a>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                  Help
                </a>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                  Feedback
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <button className="relative h-8 w-8 overflow-hidden rounded-full">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="Profile"
            layout="fixed"
            objectFit="cover"
            width={32}
            height={32}
            priority
          />
        </button>
      </div>
    </header>
  );
};

export default DashbaordHeader;
