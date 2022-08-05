import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );

    return <div>hiiiiii</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
