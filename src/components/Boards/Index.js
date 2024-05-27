import { MenuItems } from "@/constants";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";

export const Board = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const mouseClick = useRef(false);
  const { activeMenuItem, actionMenuItem } = useSelector((state) => state.menu);
  const { color, size } = useSelector((state) => state.toolBox[activeMenuItem]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (actionMenuItem === MenuItems.DOWNLOAD) {
      const URL = canvas.toDataURL();
      const anchor = document.createElement("a");
      anchor.href = URL;
      anchor.download = "canvas.png";
      anchor.click();
    }
    dispatch(actionItemClick(null));
  }, [actionMenuItem, dispatch]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const lineConfig = () => {
      if (context.strokeStyle !== color || context.lineWidth !== size) {
        context.strokeStyle = color;
        context.lineWidth = size;
      }
    };

    lineConfig();

    console.log("lineConfig === ", lineConfig());
  }, [color, size]);

  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const MouseDown = (e) => {
      mouseClick.current = true;
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    };

    const MouseMove = (e) => {
      if (mouseClick.current) {
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
      }
    };

    const MouseUp = (e) => {
      mouseClick.current = false;
    };

    canvas.addEventListener("mousedown", MouseDown);
    canvas.addEventListener("mousemove", MouseMove);
    canvas.addEventListener("mouseup", MouseUp);

    return () => {
      canvas.removeEventListener("mousedown", MouseDown);
      canvas.removeEventListener("mousemove", MouseMove);
      canvas.removeEventListener("mouseup", MouseUp);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};
