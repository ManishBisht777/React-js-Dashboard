import React from "react";
import "./profile.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profilebox">
        <img src="https://picsum.photos/200/300" alt="" />
        <div className="profileinfo">
          <h3>oliver boi</h3>
          <p>vendor</p>
        </div>
        <span>
          <ArrowForwardIosIcon />
        </span>
      </div>
      <div className="meetings">
        <h3>
          Upcoming meetings
          <span>
            <MoreVertIcon />
          </span>
        </h3>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Today Meetings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="meetbox">
              <p className="call">30 min call with Clients</p>
              <h3>Project Discovery Call</h3>
              <p>
                Due Soon <span>09:20 AM</span>
              </p>
              <div className="persons">
                <img
                  src="https://i.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI"
                  alt=""
                />
                <img
                  src="https://i.picsum.photos/id/173/200/300.jpg?hmac=9Ed5HxHOL3tFCOiW6UHx6a3hVksxDWc7L7p_WzN9N9Q"
                  alt=""
                />
                <img
                  src="https://i.picsum.photos/id/847/200/300.jpg?hmac=c59lDNOau0hCfCBs141cA-vqX8QIRiqaVEnT3tRrDe0"
                  alt=""
                />
                <img
                  src="https://i.picsum.photos/id/137/200/300.jpg?hmac=5vAnK2h9wYgvt2769Z9D1XYb8ory9_zB0bqDgVjgAnk"
                  alt=""
                />
              </div>
              <button>Invite</button>
            </div>
            <div className="meetbox">
              <p className="call">30 min call with Clients</p>
              <h3>Project Discovery Call</h3>
              <p>
                Due Soon <span>09:20 AM</span>
              </p>
              <div className="persons">
                <img
                  src="https://i.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI"
                  alt=""
                />
                <img
                  src="https://i.picsum.photos/id/173/200/300.jpg?hmac=9Ed5HxHOL3tFCOiW6UHx6a3hVksxDWc7L7p_WzN9N9Q"
                  alt=""
                />
                <img
                  src="https://i.picsum.photos/id/847/200/300.jpg?hmac=c59lDNOau0hCfCBs141cA-vqX8QIRiqaVEnT3tRrDe0"
                  alt=""
                />
                <img
                  src="https://i.picsum.photos/id/137/200/300.jpg?hmac=5vAnK2h9wYgvt2769Z9D1XYb8ory9_zB0bqDgVjgAnk"
                  alt=""
                />
              </div>
              <button>Invite</button>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="schedulemeeting">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Schedule Meeting</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="meetbox">
              <p className="call">
                30 min call <span>yo</span>
              </p>
              <h3>Project Discovery Call</h3>
              <p>
                Due Soon <span>09:20 AM</span>
              </p>
              <div className="persons">
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <button>Invite</button>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="recentact">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Recent Meeting</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="meetbox">
              <p className="call">
                Thanks For Booking Meeting with <span>Manish</span>
              </p>
              <h3>Manish Bisht</h3>
              <p>
                22 June 2022<span>09:20 AM</span>
              </p>
              <div className="persons">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
            </div>
            <div className="meetbox">
              <p className="call">
                Thanks For Booking Meeting with <span>Manish</span>
              </p>
              <h3>Manish Bisht</h3>
              <p>
                22 June 2022<span>09:20 AM</span>
              </p>
              <div className="persons">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
            </div>
            <div className="meetbox">
              <p className="call">
                Thanks For Booking Meeting with <span>Manish</span>
              </p>
              <h3>Manish Bisht</h3>
              <p>
                22 June 2022<span>09:20 AM</span>
              </p>
              <div className="persons">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Profile;
