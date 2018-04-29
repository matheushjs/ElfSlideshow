import React, { Component } from 'react';
import './App.css';

import { Fade } from 'react-slideshow-image';

const images = [
  'img/slideimage-gpucpu.png',
  'img/slideimage-linux.png',
  'img/slideimage-parallel.png',
];

class App extends Component {
  render() {
    return (
        <Fade
          images={images}
          duration={5000}
          transitionDuration={1000}
        />
    );
  }
}

export default App;
