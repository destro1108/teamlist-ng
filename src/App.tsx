import { useState } from "react";
import data from "./static/data.json";

function App() {
  console.log(data);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-800 text-gray-50">
      <header className="flex h-20 items-center justify-center container mx-auto">
        <p className="text-2xl">Interview Project - User List</p>
      </header>
      <main className="flex-1 flex items-center justify-center container mx-auto">
        <div
          className="flex flex-col items-center gap-2 px-2 py-1"
          data-tooltip-target="tooltip-top"
          data-tooltip-placement="top"
        >
          <img src={data[0].imageUrl} className="rounded-full" />
          <p>{data[0].name}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
