import React from "react";
import logo from "../../../assets/images/PS_Logo_SH.png";
import {
  headersContainer,
  headerClass,
  contentClass,
  menuClass,
  menuButton,
  activeHeaderButton,
} from "./HeaderClass";
import { Box, Button, Typography, IconButton } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { Subheader } from "../Subheader/Subheader.jsx";

export function Header() {
  return (
    <div className={headersContainer}>
      <div className={headerClass}>
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <div className={contentClass}>
          <span className="text-xs ml-1">Competency Framework</span>
          <Box className="flex justify-between items-center w-3/4">
            <Box className={menuClass}>
              <div className={`${menuButton} ${activeHeaderButton}`}>
                <HomeOutlinedIcon />
                <span className="text-[10px]">HOME</span>
              </div>
              <div className={menuButton}>
                <FileDownloadOutlinedIcon />
                <span className="text-[10px]">DOWNLOADS</span>
              </div>
              <div className={menuButton}>
                <CalendarMonthOutlinedIcon />
                <span className="text-[10px]">EVENTS</span>
              </div>
              <div className={menuButton}>
                <NewspaperOutlinedIcon />
                <span className="text-[10px]">REPORT(S)</span>
              </div>
              <div className={menuButton}>
                <HelpOutlineOutlinedIcon />
                <span className="text-[10px]">HELP</span>
              </div>
              <div className={menuButton}>
                <MessageOutlinedIcon />
                <span className="text-[10px]">QUIZME TEST</span>
              </div>
            </Box>

            <Box className="flex flex-col">
              <span className="font-semibold">
                Cristian-Florentin Marin <ArrowDropDownIcon />
              </span>
              <span className="text-[8px]">Senior Associate Technology L1</span>
            </Box>
          </Box>
          <FolderOpenOutlinedIcon className="mr-10" />
        </div>
      </div>
      <Subheader />
    </div>
  );
}
