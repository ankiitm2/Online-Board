import { Board } from "@/components/Boards/Index";
import { Menu } from "@/components/Menu/Index";
import { ToolBox } from "@/components/ToolBox/Index";

export default function Home() {
  return (
    <>
      <Menu />
      <ToolBox />
      <Board />
    </>
  );
}
