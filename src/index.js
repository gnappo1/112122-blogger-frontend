import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import { AuthorProvider } from './context/authorContext';
import { PostProvider } from './context/postContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthorProvider>
    <PostProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </PostProvider>
  </AuthorProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
