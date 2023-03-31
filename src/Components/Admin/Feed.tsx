import { Button } from "@mui/material";
import React, { useState } from "react";
import "./common.css";
import EventData from "../../Data/event.json";

const Feed = () => {
  const [feedActive, setFeedActive] = useState("home");

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-left">
        <ul>
          <li
            onClick={() => setFeedActive("home")}
            className={
              feedActive === "home" ? "admin-dashboard-left-active" : ""
            }
          >
            HOME
          </li>
          <li
            onClick={() => setFeedActive("new-event")}
            className={
              feedActive === "new-event" ? "admin-dashboard-left-active" : ""
            }
          >
            NEW EVENT
          </li>
          <li
            onClick={() => setFeedActive("past-event")}
            className={
              feedActive === "past-event" ? "admin-dashboard-left-active" : ""
            }
          >
            PAST EVENT
          </li>
          <li
            onClick={() => setFeedActive("upcoming-event")}
            className={
              feedActive === "upcoming-event"
                ? "admin-dashboard-left-active"
                : ""
            }
          >
            UPCOMING EVENT
          </li>
        </ul>
      </div>
      <div className="admin-dashboard-right">
        {/* home */}
        {feedActive === "home" && (
          <div>
            <h1>welcome to events</h1>
          </div>
        )}
        {/* new event */}
        {feedActive === "new-event" && (
          <div className="admin-right-center">
            <div className="feed-form">
              <h2>TITTLE :</h2>
              <input type="text" />
              <h2>VENUE :</h2>
              <input type="text" />
              <h2>SUBJECT :</h2>
              <textarea rows={4} />
              <Button variant="outlined">POST</Button>
            </div>
          </div>
        )}
        {/* past event */}
        {feedActive === "past-event" && (
          <div className="event-main">
            {EventData &&
              EventData.map((data: any) => {
                return (
                  <div className="event" key={Math.random()}>
                    <h1>PAST {data.tittle}</h1>
                    <h3>{data.venue}</h3>
                    <p>{data.subject}</p>
                  </div>
                );
              })}
          </div>
        )}
        {/* upcoming event */}
        {feedActive === "upcoming-event" && (
          <div className="event-main">
          {EventData &&
            EventData.map((data: any) => {
              return (
                <div className="event" key={Math.random()}>
                  <h1>UPCOMMING {data.tittle}</h1>
                  <h3>{data.venue}</h3>
                  <p>{data.subject}</p>
                </div>
              );
            })}
        </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
