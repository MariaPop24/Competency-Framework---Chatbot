import React from "react";
import {
  chatHistoryClass,
  chatsContainer,
  newDiscussionButton,
  cardClass,
  cardContentClass,
} from "./ChatHistory";
import { Button } from "@mui/material";
import { chatsList } from "../../../lib/chatsList";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export function ChatHistory() {
  return (
    <div className={`custom-scrollbar ${chatHistoryClass}`}>
      <button className={newDiscussionButton}>New Discussion</button>

      <div className={`custom-scrollbar ${chatsContainer}`}>
        {chatsList.map((item) => (
          <Card key={item.id} className={cardClass}>
            <CardContent className={cardContentClass}>{item.title}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
