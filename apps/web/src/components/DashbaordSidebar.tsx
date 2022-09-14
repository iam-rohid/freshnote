import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Tooltip from "./Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faNoteSticky,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const DashbaordSidebar = () => {
  const router = useRouter();
  return (
    <aside className="dashboard-sidebar">
      <nav className="main-menu">
        <ul className="menu-list">
          <Tooltip side="right" label="Notebooks">
            <li>
              <Link href="notebooks" passHref>
                <a
                  className={`menu-item ${
                    router.asPath.split("/")[2] === "notebooks" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faNoteSticky} />
                </a>
              </Link>
            </li>
          </Tooltip>
          <Tooltip side="right" label="Search">
            <li>
              <button className="menu-item">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </li>
          </Tooltip>
          <Tooltip side="right" label="Favorites">
            <li>
              <Link href="favorites">
                <a
                  className={`menu-item ${
                    router.asPath.split("/")[2] === "favorites" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faStar} />
                </a>
              </Link>
            </li>
          </Tooltip>
          <Tooltip side="right" label="Settigns">
            <li>
              <Link href="settings">
                <a
                  className={`menu-item ${
                    router.asPath.split("/")[2] === "settings" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faCog} />
                </a>
              </Link>
            </li>
          </Tooltip>
        </ul>
      </nav>
      <button className="thumb-btn">
        <figure className="avatar">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="Profile"
            layout="fixed"
            objectFit="cover"
            width={56}
            height={56}
            priority
          />
        </figure>
      </button>
    </aside>
  );
};

export default DashbaordSidebar;
