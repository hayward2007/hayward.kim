//react
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//css
import './index.css';
//components
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
//pages
import Main from './pages/main/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <BrowserRouter>
    <Index/>
  </BrowserRouter>
);

function Index() {
const location = useLocation();
  return <>
    <div style={{height: 95}}></div>
    <TransitionGroup>
        <CSSTransition className="fade" timeout={300} key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Navigate to="/main"/>}/>
            <Route path="/main" element={<Main/>}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    <Footer />
    <NavBar/>
  </>;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
