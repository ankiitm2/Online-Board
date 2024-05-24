import { FaPencilAlt } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";
import styles from "./index.module.css";
import { IoArrowUndo } from "react-icons/io5";
import { IoArrowRedoSharp } from "react-icons/io5";
import { RiDownload2Line } from "react-icons/ri";
import { MenuItems } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";

export const Menu = () => {
  const dispatch = useDispatch();

  const selectedMenuItem = useSelector((state) => state.menu.activeMenuItem);

  const handleMenuClick = (item) => {
    dispatch(menuItemClick(item));
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
      <div className={styles.iconWrapper}>
        <IoArrowUndo className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <IoArrowRedoSharp className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <RiDownload2Line className={styles.icon} />
      </div>
    </div>
  );
};
