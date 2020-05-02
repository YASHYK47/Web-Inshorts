import React from "react";
import Button from "./button";
import Main from "./main";
import News from "./apis/newsApi";
import "./css/App.css";

const KEY = "a9a0b5cb935d4e40a1c1422995a5af48";

class App extends React.Component {
  state = { present: 0, list: [], country: "in" };
  componentDidMount = async () => {
    const news = await News.get("/top-headlines", {
      params: {
        country: this.state.country,
        apiKey: KEY,
      },
    });
    this.setState({ list: news.data.articles });
  };

  onNext = (event) => {
    if (this.state.present === this.state.list.length - 1)
      this.setState({ present: 0 });
    else this.setState({ present: this.state.present + 1 });
  };

  onPrev = (event) => {
    if (this.state.present === 0) this.setState({ present: 0 });
    else this.setState({ present: this.state.present - 1 });
  };

  render() {
    return (
      <div className="app">
        <Main news={this.state.list[this.state.present]} />
        <Button cName="button1" name="PREVIOUS" onPress={this.onPrev} />
        <Button cName="button2" name="NEXT" onPress={this.onNext} />
      </div>
    );
  }
}

export default App;
