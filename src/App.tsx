import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-800 text-gray-50">
      <header className="flex h-20 items-center justify-center container mx-auto">
        <p className="text-2xl">Interview Project - User List</p>
      </header>
      <main className="flex-1 flex items-center justify-center container mx-auto"></main>
    </div>
  );
}

export default App;
