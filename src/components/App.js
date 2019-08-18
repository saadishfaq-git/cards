import React from "react";
import CreateUser from "./CreateUser";

class App extends React.Component {
  state = { language: "English" };
  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select your language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("English")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("Dutch")}
          />
        </div>
        <CreateUser />
      </div>
    );
  }
}

export default App;
