import React from "react";
import "./dashboard.css";
import HourglassDisabledTwoToneIcon from "@mui/icons-material/HourglassDisabledTwoTone";
import AttractionsIcon from "@mui/icons-material/Attractions";
import BackupIcon from "@mui/icons-material/Backup";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Skeleton from "@mui/material/Skeleton";
import SearchIcon from "@mui/icons-material/Search";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="searchbox">
        <span>
          <SearchIcon />
        </span>
        <input type="text" placeholder="Search For Products" />
      </div>
      <div className="commonbox">
        <h3 className="heading">Welcome back, Andrew!</h3>
        <p className="desc">Have A Look At Quick Progress Bar</p>
        <div className="status">
          <div className="project">
            <div className="box1">
              <button>
                <span>
                  <HourglassDisabledTwoToneIcon />
                </span>
                Live Projects
              </button>
              <button>View all</button>
            </div>
            <div className="box2">
              <h3>67</h3>
              <p>Currently The Project in Prgress.</p>
            </div>
          </div>
          <div className="project">
            <div className="box1">
              <button>
                <span>
                  <BackupIcon />
                </span>
                In Progress
              </button>
            </div>
            <div className="box2">
              <h3>169</h3>
              <p>In Progress.</p>
            </div>
          </div>
          <div className="project">
            <div className="box1">
              <button>
                <span>
                  <AttractionsIcon />
                </span>
                Completeted
              </button>
            </div>
            <div className="box2">
              <h3>24</h3>
              <p>Completed Projects.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="commonbox">
        <h3 className="heading">Current Projects</h3>
        <p className="desc">Projects that are Currently in Progress</p>
        <div className="projects">
          <div className="project">
            <h3>Construction Project</h3>
            <p>Property Name</p>
            <div className="boxidx">
              <p>
                <AttachMoneyIcon /> 180-190
              </p>
              <p>
                <CalendarMonthIcon /> 25 May
              </p>
            </div>
            <Skeleton animation={false} />
            <div className="vendor">
              <div className="vendorinfo">
                <img src="https://picsum.photos/200/300" alt="" />
                <p>Vender Name</p>
              </div>
              <button>view</button>
            </div>
          </div>
          <div className="project">
            <h3>Construction Project</h3>
            <p>Property Name</p>
            <div className="boxidx">
              <p>
                <AttachMoneyIcon /> 180-190
              </p>
              <p>
                <CalendarMonthIcon /> 25 May
              </p>
            </div>
            <Skeleton animation={false} />
            <div className="vendor">
              <div className="vendorinfo">
                <img src="https://picsum.photos/200/300" alt="" />
                <p>Vender Name</p>
              </div>
              <button>view</button>
            </div>
          </div>
          <div className="project">
            <h3>Construction Project</h3>
            <p>Property Name</p>
            <div className="boxidx">
              <p>
                <AttachMoneyIcon /> 180-190
              </p>
              <p>
                <CalendarMonthIcon /> 25 May
              </p>
            </div>
            <Skeleton animation={false} />
            <div className="vendor">
              <div className="vendorinfo">
                <img src="https://picsum.photos/200/300" alt="" />
                <p>Vender Name</p>
              </div>
              <button>view</button>
            </div>
          </div>
        </div>
      </div>
      <div className="commonbox">
        <h3 className="heading">Pending Invoice</h3>
        <p className="desc">Invoices Thar are Currently Pending</p>
        <div className="projects">
          <div className="project">
            <h3>$ 150</h3>
            <p>Amount</p>
            <div className="boxidx">
              <p>Status</p>
              <button>Approved</button>
            </div>
            <div className="profilebox">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="profileinfo">
                <h3>Manish Bisht</h3>
                <p>
                  vendor <span>23 June</span>
                </p>
              </div>
            </div>
          </div>
          <div className="project">
            <h3>$ 150</h3>
            <p>Amount</p>
            <div className="boxidx">
              <p>Status</p>
              <button>Approved</button>
            </div>
            <div className="profilebox">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="profileinfo">
                <h3>Manish Bisht</h3>
                <p>
                  vendor <span>23 June</span>
                </p>
              </div>
            </div>
          </div>
          <div className="project">
            <h3>$ 150</h3>
            <p>Amount</p>
            <div className="boxidx">
              <p>Status</p>
              <button>Approved</button>
            </div>
            <div className="profilebox">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="profileinfo">
                <h3>Manish Bisht</h3>
                <p>
                  vendor <span>23 June</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
