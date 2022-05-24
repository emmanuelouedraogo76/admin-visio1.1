import React, { useEffect } from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import { connect } from "react-redux";
import { setTwilioAccessToken } from "../store/actions";
import { getTokenFromTwilio } from "../utils/twilioUtils";
import Overlay from "./Overlay";
import { useNavigate } from "react-router-dom";

import "./RoomPage.css";

const RoomPage = (props) => {
  const { identity, roomId ,setTwilioAccessTokenAction, showOverlay } = props;

  const history = useNavigate();

  useEffect(() => {
    if (!identity || !roomId) {
    history("/");
        
    } else {
          getTokenFromTwilio(setTwilioAccessTokenAction, identity);
    }
  }, [history, identity, roomId, setTwilioAccessTokenAction]);

  return (
    <div className="room_container">
      <ParticipantsSection />
      <VideoSection />
      <ChatSection />
      {showOverlay && <Overlay />}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setTwilioAccessTokenAction: (token) =>
      dispatch(setTwilioAccessToken(token)),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomPage);
