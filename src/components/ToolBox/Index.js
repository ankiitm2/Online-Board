import React from "react";
import styles from "./index.module.css";
import { Colors, MenuItems } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeBrushSize, changeColor } from "@/slice/toolBoxSlice";

export const ToolBox = () => {
  const dispatch = useDispatch();

  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrikeTools = activeMenuItem === MenuItems.PENCIL;
  const showBrushSize = activeMenuItem === MenuItems.PENCIL || MenuItems.ERASER;
  const { color, size } = useSelector((state) => state.toolBox[activeMenuItem]);

  const UpdateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };

  const UpdateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  };

  return (
    <div className={styles.ToolBoxContainer}>
      {showStrikeTools && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            <div
              className={`${styles.colorBox} ${
                color === Colors.BLACK ? styles.active : ""
              }`}
              style={{ backgroundColor: Colors.BLACK }}
              onClick={() => UpdateColor(Colors.BLACK)}
            />
            <div
              className={`${styles.colorBox} ${
                color === Colors.RED ? styles.active : ""
              }`}
              style={{ backgroundColor: Colors.RED }}
              onClick={() => UpdateColor(Colors.RED)}
            />
            <div
              className={`${styles.colorBox} ${
                color === Colors.BLUE ? styles.active : ""
              }`}
              style={{ backgroundColor: Colors.BLUE }}
              onClick={() => UpdateColor(Colors.BLUE)}
            />
            <div
              className={`${styles.colorBox} ${
                color === Colors.PINK ? styles.active : ""
              }`}
              style={{ backgroundColor: Colors.PINK }}
              onClick={() => UpdateColor(Colors.PINK)}
            />
            <div
              className={`${styles.colorBox} ${
                color === Colors.YELLOW ? styles.active : ""
              }`}
              style={{ backgroundColor: Colors.YELLOW }}
              onClick={() => UpdateColor(Colors.YELLOW)}
            />
            <div
              className={`${styles.colorBox} ${
                color === Colors.GREEN ? styles.active : ""
              }`}
              style={{ backgroundColor: Colors.GREEN }}
              onClick={() => UpdateColor(Colors.GREEN)}
            />
          </div>
        </div>
      )}
      {showBrushSize && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Brush Size</h4>
          <div className={styles.itemContainer}>
            <input
              className={styles.range}
              type="range"
              min={0}
              max={9}
              step={1}
              // value={size}
              onChange={UpdateBrushSize}
            />
          </div>
        </div>
      )}
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Add Text</h4>
        <div className={styles.itemContainer}>
          <div></div>
        </div>
      </div>
    </div>
  );
};
