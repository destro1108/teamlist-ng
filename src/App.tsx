import { useLayoutEffect, useState } from "react";
import data from "./static/data.json";
import ProfileComponent from "./components/ProfileComponent";
import { Place } from "react-tooltip";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function App() {
  const [width] = useWindowSize();
  const [active, setActive] = useState("");
  const handleMouse = (val: string) => {
    setActive(val);
  };
  const getDir = (inx: number): Place[] => {
    if (width < 768) {
      return ["bottom", (inx + 1) % 2 == 0 ? "right" : "left"];
    } else if (width >= 768 && width < 1024) {
      if ((inx + 1) % 3 === 0) return ["left", "bottom"];
      if ((inx + 1) % 3 === 1) return ["right", "bottom"];
      return ["bottom", "bottom"];
    }
    if ((inx + 1) % 4 === 1) return ["right", "bottom"];
    else if ((inx + 1) % 4 === 0) return ["left", "bottom"];
    return ["bottom", "bottom"];
  };
  return (
    <div
      className={`min-h-screen w-full flex flex-col bg-gray-200 text-gray-800 ${
        active === "" ? "" : "bg-white bg-opacity-40 "
      }`}
    >
      <header className="flex items-center justify-center container mx-auto">
        <h2 className="text-4xl font-semibold py-12">
          Interview Project - User List
        </h2>
      </header>
      <main className="container mx-auto relative">
        <div
          className={`min-h-full w-full absolute top-0 bg-white bg-opacity-40 z-10 ${
            active === "" ? "invisible" : "visible"
          }`}
        ></div>

        <div className="grid grid-cols-2 px-10 py-2 place-items-center md:grid-cols-3 lg:grid-cols-4 items-baseline">
          {data.map((el, inx) => (
            <ProfileComponent
              key={el.id}
              data={el}
              handleMouse={handleMouse}
              direction={getDir(inx)}
              active={active}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
