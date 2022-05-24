import React from "react";
import ConnectingButton from "./ConnectingButton";
import { useNavigate } from "react-router-dom";

const ConnectingButtons = () => {
  let history = useNavigate();

  const pushToJoinRoomPage = () => {
    history("/join-room");
  };

  const pushToJoinRoomPageAsHost = () => {
    history("/join-room?host=true");
  };

  return (
    <div className="connecting_buttons_container">
      <ConnectingButton
        buttonText="Join a meeting"
        onClickHandler={pushToJoinRoomPage}
      />
      <ConnectingButton
        buttonText="Host a meeting"
        createRoomButton
        onClickHandler={pushToJoinRoomPageAsHost}
      />
    </div>
  );
};

export default ConnectingButtons;
