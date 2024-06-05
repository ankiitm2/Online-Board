import { FaPencilAlt } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";
import { IoArrowUndo } from "react-icons/io5";
import { IoArrowRedoSharp } from "react-icons/io5";
import { RiDownload2Line } from "react-icons/ri";
import { MenuItems } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";
import styles from "./index.module.css";

export const Menu = () => {
  const dispatch = useDispatch();

  const selectedMenuItem = useSelector((state) => state.menu.activeMenuItem);

  const handleMenuClick = (item) => {
    dispatch(menuItemClick(item));
  };

  const handleActionClick = (item) => {
    dispatch(actionItemClick(item));
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={`${styles.iconWrapper} ${
          selectedMenuItem === MenuItems.PENCIL ? styles.active : ""
        }`}
        onClick={() => handleMenuClick(MenuItems.PENCIL)}
      >
        <FaPencilAlt className={styles.icon} />
      </div>
      <div
        className={`${styles.iconWrapper} ${
          selectedMenuItem === MenuItems.ERASER ? styles.active : ""
        }`}
        onClick={() => handleMenuClick(MenuItems.ERASER)}
      >
        <FaEraser className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionClick(MenuItems.UNDO)}
      >
        <IoArrowUndo className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionClick(MenuItems.REDO)}
      >
        <IoArrowRedoSharp className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionClick(MenuItems.DOWNLOAD)}
      >
        <RiDownload2Line className={styles.icon} />
      </div>
    </div>
  );
};
