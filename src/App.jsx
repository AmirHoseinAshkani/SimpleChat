// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import PanelHeading from "./Components/PanelHeading";
import PanelBody from "./Components/PanelBody";
import PanelFooter from "./Components/PanelFooter";
export default class App extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        Title: "Chat",

        chatList: [
          {
            type: "sent",
            message: "Good morning,sir.What can I do for you?",
            time: "11:37:08 am",
          },
          {
            type: "recive",
            message: "Well, I am just looking around.",
            time: "11:39:57 am",
          },
          {
            type: "sent",
            message: "If necessary, please ask me.",
            time: "11:40:10 am",
          },
        ],

        gravatar: {
          User1: "https://bootdey.com/img/Content/avatar/avatar1.png",
          User2: "https://bootdey.com/img/Content/avatar/avatar2.png",
        },
      });
      this.handlesubmit = this.handlesubmit.bind(this);
    }

  handlesubmit(message) {
    this.setState((state) => {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            type: "sent",
            message,
            time: new Date().toLocaleTimeString(),
          },
        ],
      };
    });
  }
  render() {
    return (
      <>
        <div className="container bootstrap snippets">
          <div className="col-md-7 col-xs-12 col-md-offset-2">
            <div className="panel" id="chat">
              <PanelHeading title={this.state.Title} />
              <PanelBody
                chatlist={this.state.chatList}
                gravatar={this.state.gravatar}
              />
              <PanelFooter handlesubmit={this.handlesubmit} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
