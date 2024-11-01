import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import counterReducers from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ReviewPage from './Review_Page';
import ReviewDetail from './Review Detail';
import JoinUs from './Join Us';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={counterReducers}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/app" element={<App />} />
          <Route path="/review-page" element={<ReviewPage />} />
          <Route path="/review-detail" element={<ReviewDetail />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
  ,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();