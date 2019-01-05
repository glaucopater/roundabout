import React, { Component } from 'react'; 
import './App.css';
import CarouselContainer from "./containers/CarouselContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarouselContainer />
      </div>
    );
  }
}

export default App;
