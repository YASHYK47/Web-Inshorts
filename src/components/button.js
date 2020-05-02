import React from "react";
import "./css/App.css";

class Button extends React.Component {
  // state = {  }
  render() {
    return (
      <button
        className={this.props.cName}
        onClick={(event) => {
          this.props.onPress(event);
        }}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
