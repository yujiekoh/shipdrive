import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory";
import { StateProvider } from "./provider/StateProvider";
import StateReducer, { initialState } from "./reducer/StateReducer";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <StateProvider initialState={initialState} reducer={StateReducer}>
        <App />
      </StateProvider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
