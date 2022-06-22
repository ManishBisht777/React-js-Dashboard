import React from "react";
import "./navbar.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CallIcon from "@mui/icons-material/Call";
import AlbumIcon from "@mui/icons-material/Album";
import AllInboxIcon from "@mui/icons-material/AllInbox";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="nav">
        <ul>
          <li className="tabactive">
            <a href="/">
              <span>
                <AccountBalanceWalletIcon />
              </span>
              DashBoard
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <AllInboxIcon />
              </span>
              Project
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <CalendarMonthIcon />
              </span>
              Calender
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <SendIcon />
              </span>
              Messages
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <NotificationsActiveIcon />
              </span>
              Notification
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <CallIcon />
              </span>
              Contacts
            </a>
          </li>
        </ul>
        <p>Promotions</p>
        <li>
          <a href="/">
            <span>
              <AlbumIcon />
            </span>
            Promotions
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
