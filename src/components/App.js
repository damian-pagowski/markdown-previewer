import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Window from "./Window";
const marked = require('marked');

class App extends React.Component {
  state = {
    input : "# H1 Hello Wrld",
    output: marked("# H1 Hello Wrld")
  };

  handleChange = textValue => {
    this.setState({ input: textValue,
    output : marked(textValue)
    });
    console.log(marked(textValue));
  };

  runPreview = () => {

  }

  render() {
    return (
      <div id="main-screen">
        <Navbar />
          <div id="panels-wrapper">
              <Window role="editor" data={this.state.input} callback={this.handleChange} />
              <Window role="preview" data={this.state.output}/>
        </div>
      </div>
    );
  }
}

export default App;
