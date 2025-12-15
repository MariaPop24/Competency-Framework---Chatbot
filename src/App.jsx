import React from "react";
import Button from "@mui/material/Button";
import { Header } from "./components/chatbot/Header/Header";

export default function App() {
  return (
    <div className="text-xs flex flex-col items-center justify-center h-screen bg-gray-100">
      <Header />
    </div>
  );
}
