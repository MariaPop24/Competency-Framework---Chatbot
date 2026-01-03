import React from "react";
import {
  chatContainer,
  inputWrapper,
  sendButtonClass,
  textareaClass,
  textareaWrapper,
} from "./Chat";
import { messages } from "../../../lib/messages";
import { Avatar } from "@mui/material";

export function Chat() {
  const [value, setValue] = React.useState("");
  const textareaRef = React.useRef(null);
  const avatarClasses = "w-10 h-10";
  const userImage = "src/assets/images/chat-bot.png";

  React.useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }, [value]);

  const handleSend = () => {
    if (!value.trim()) return;
    console.log("Send:", value);
    setValue("");
  };
  return (
    <div className={chatContainer}>
      {/* <div className={initialText}>Ready when you are.</div> */}
      <div className='w-full h-full overflow-y-auto mb-20'>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.sender === "bot"
                ? "text-left mb-2 flex items-center gap-2"
                : "text-right mb-2 flex items-center gap-2 flex-row-reverse"
            }
          >
            <div className={avatarClasses}>
              {msg.sender === "bot" ? (
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  alt='User'
                  src={userImage}
                />
              ) : (
                <Avatar sx={{ width: 40, height: 40, bgcolor: "#fd404c" }}>
                  CM
                </Avatar>
              )}
            </div>
            <div
              className={
                msg.sender === "bot"
                  ? "inline-block bg-gray-200 p-2 rounded"
                  : "inline-block bg-neutral-500 text-white p-2 rounded"
              }
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className={inputWrapper}>
        <div className={textareaWrapper}>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={1}
            placeholder='Ask anything...'
            className={textareaClass}
          />

          <button onClick={handleSend} className={sendButtonClass}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
