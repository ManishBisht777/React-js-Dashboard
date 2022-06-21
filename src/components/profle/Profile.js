import React from "react";
import "./profile.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profilebox">
        <img src="https://picsum.photos/200/300" alt="" />
        <div className="profileinfo">
          <h3>oliver boi</h3>
          <p>vendor</p>
        </div>
      </div>
      <div className="meetings">
        <h3>Upcoming meetings</h3>

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
              <h3>Some other Name</h3>
              <p>
                Date ans shit<span>09:20 AM</span>
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
