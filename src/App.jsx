import React from "react";
import { Header } from "./components/chatbot/Header/Header";
import { ChatHistory } from "./components/chatbot/ChatHistory/ChatHistory.jsx";
import { Chat } from "./components/chatbot/Chat/Chat.jsx";
import { chatbotContainer } from "./App.js";

export default function App() {
  return (
    <div className='text-xs flex flex-col items-center justify-center h-screen bg-[#f8f7f3]'>
      <Header />
      <span className={chatbotContainer}>
        <ChatHistory />
        <Chat />
      </span>
    </div>
  );
}
