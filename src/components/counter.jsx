import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleClick} className="btn btn-secondary btn-sm">
          Incremet
        </button>
      </React.Fragment>
    );
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
