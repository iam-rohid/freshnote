import {
  faArrowDownShortWide,
  faCaretDown,
  faCaretRight,
  faExpand,
  faFile,
  faFilter,
  faFolder,
  faFolderClosed,
  faFolderOpen,
  faFolderPlus,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "./Tooltip";

const NotebooksSidebar = () => {
  return (
    <aside className="page-sidebar notebooks-sidebar">
      <header className="sidebar-header">
        <div className="toolbar">
          <Tooltip label="Create Note">
            <button className="toolbar-item">
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </Tooltip>
          <Tooltip label="Create Notebook">
            <button className="toolbar-item">
              <FontAwesomeIcon icon={faFolderPlus} />
            </button>
          </Tooltip>
          <Tooltip label="Sort">
            <button className="toolbar-item">
              <FontAwesomeIcon icon={faArrowDownShortWide} />
            </button>
          </Tooltip>
          <Tooltip label="Filter">
            <button className="toolbar-item">
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </Tooltip>
        </div>
      </header>
      <div className="sdiebar-body">
        <div className="file-explorer">
          <div className="folder-item">
            <div className="folder-title">
              <span className="icon">
                <FontAwesomeIcon icon={faFolderOpen} />
              </span>
              <div className="label">First Folder</div>
            </div>
            <div className="folder-children">
              <div className="file-item">
                <span className="icon">
                  <FontAwesomeIcon icon={faFile} />
                </span>
                <div className="label">First Folder</div>
              </div>
              <div className="file-item">
                <span className="icon">
                  <FontAwesomeIcon icon={faFile} />
                </span>
                <div className="label">First Folder</div>
              </div>
            </div>
          </div>
          <div className="folder-item close">
            <div className="folder-title">
              <span className="icon">
                <FontAwesomeIcon icon={faFolderClosed} />
              </span>
              <div className="label">First Folder</div>
            </div>
            <div className="folder-children">
              <div className="file-item">
                <div className="label">First Folder</div>
              </div>
              <div className="file-item">
                <div className="label">First Folder</div>
              </div>
            </div>
          </div>

          <div className="file-item">
            <span className="icon">
              <FontAwesomeIcon icon={faFile} />
            </span>
            <div className="label">First Folder</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NotebooksSidebar;
