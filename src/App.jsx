import React from "react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Tailwind + shadcn/UI funcționează!
      </h1>
      <Button>Click Me</Button>
    </div>
  );
}
