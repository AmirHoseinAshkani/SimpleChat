import React, { Component } from "react";

export default class PanelFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handlesubmit() {
this.props.handlesubmit(this.state.input);
this.setState({
  input: ''
})
  }

  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input
              value={this.state.input}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Say something"
            />

            <span className="input-group-btn">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.handlesubmit}
              >
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
