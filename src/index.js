import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactBreakpoints from 'react-breakpoints';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";

const breakpoints = {
  mobile: 480,
  tablet: 736,
  tabletLandscape: 980,
  desktop: 1280,
  desktopLarge: 1690
};

ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <App />
  </ReactBreakpoints>,
  document.getElementById('root')
);
