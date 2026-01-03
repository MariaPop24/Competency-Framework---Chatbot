import React from "react";
import { chatContainer, initialText } from "./Chat";

export function Chat() {
  const [value, setValue] = React.useState("");
  const textareaRef = React.useRef(null);

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
      <div className={initialText}>Ready when you are.</div>
      <div className='absolute bottom-2 left-0 right-0 px-3'>
        <div className='flex items-end gap-2 rounded-md border border-neutral-200 bg-white px-4 py-3'>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={1}
            placeholder='Ask anything...'
            className='
        w-full
        resize-none
        overflow-hidden
        bg-transparent
        outline-none
        text-sm
      '
          />

          <button
            onClick={handleSend}
            className='h-8 w-8 rounded-full bg-gray-900 text-white'
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
