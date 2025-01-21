// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Chat from "./Chat";
export default function PanelBody(props) {
  const Chats = props.chatlist.map((chat) => {
    const Isleft = "recive" === chat.type;
    return (
      <Chat
        time={chat.time}
        message={chat.message}
        gravator={Isleft ? props.gravatar.User2 : props.gravatar.User1}
        IsLeft={Isleft}
      />
    );
  });
  return (
    <div className="panel-body">
      <div className="chats">{Chats}</div>
    </div>
  );
}
