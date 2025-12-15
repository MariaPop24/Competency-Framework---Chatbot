import React from "react";
import {
  subheaderClass,
  subheaderButton,
  activeSubheaderButton,
} from "./Subheader";

export function Subheader() {
  return (
    <div className={subheaderClass}>
      <span className={subheaderButton}>My Career</span>
      <span className={subheaderButton}>My Competencies</span>
      <span className={subheaderButton}>My Certifications</span>
      <span className={subheaderButton}>Whats New</span>
      <span className={subheaderButton}>About</span>
      <span className={`${subheaderButton} ${activeSubheaderButton}`}>
        Chatbot
      </span>
    </div>
  );
}
