// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Chat(props) {
  return (
    <div className={`chat ${props.IsLeft && "chat-left"}`}>
      <div className="chat-avatar">
        <a
          className="avatar avatar-online"
          data-toggle="tooltip"
          href="#"
          data-placement="right"
          title=""
        >
          <img src={props.gravator} />
          <i></i>
        </a>
      </div>

      <div className="chat-body">
        <div className="chat-content">
          <p>{props.message}</p>
          <time className="chat-time" dateTime={props.time}>
            {props.time}
          </time>
        </div>
      </div>
    </div>
  );
}
