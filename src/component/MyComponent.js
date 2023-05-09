import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "teo",
    age: "20",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleClickButton = () => {
    console.log("hit the button");
    alert("OMG, you click me");
  };

  render() {
    // let name = "linh";

    return (
      <>
        <input
          value={this.state.name}
          type="text"
          onChange={(event) => this.handleOnChangeName(event)}
        />
        <div className="first">Hello, my name is {this.state.name} </div>
        <div className="second">{this.state.age} is a age of me </div>
        <div className="third">
          <button onClick={() => this.handleClickButton()}>Click me</button>
        </div>
      </>
    );
  }
}

export default MyComponent;
