import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const Board = () => {
  const canvasRef = useRef(null);
  const mouseClick = useRef(false);
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useSelector((state) => state.toolBox[activeMenuItem]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lineConfig = () => {
      if (context.strokeStyle !== color || context.lineWidth !== size) {
        context.strokeStyle = color;
        context.lineWidth = size;
      }
    };

    lineConfig();

    console.log("lineConfig === ", lineConfig());

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
  }, [color, size]);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};
