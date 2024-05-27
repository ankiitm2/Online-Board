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

  const UpdateColorIntensity = (intensity) => {
    const updatedColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${
      intensity / 255
    })`; // Update color intensity based on the range input value
    dispatch(changeColor({ item: activeMenuItem, color: updatedColor }));
  };

  return (
    <div className={styles.ToolBoxContainer}>
      {showStrikeTools && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            {Object.keys(Colors).map((colorKey) => (
              <div
                key={colorKey}
                className={`${styles.colorBox} ${
                  color === Colors[colorKey] ? styles.active : ""
                }`}
                style={{ backgroundColor: Colors[colorKey] }}
                onClick={() => UpdateColor(Colors[colorKey])}
              />
            ))}
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
              value={size}
              onChange={UpdateBrushSize}
            />
          </div>
        </div>
      )}
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Color Intensity</h4>
        <div className={styles.itemContainer}>
          <input
            className={styles.range}
            type="range"
            min={0}
            max={255}
            step={1}
            // value={colorIntensity}
            onChange={(e) => UpdateColorIntensity(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Add Text</h4>
        <div className={styles.itemContainer}>
          <div></div>
        </div>
      </div>
    </div>
  );
};
