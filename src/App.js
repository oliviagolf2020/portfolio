import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import './App.css'
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Easteregg from './views/Easteregg';
import DormRoomTips from './views/DormRoomTips';
import HowToManageTime from './views/HowToManageTime';

// Initialize Google Analytics
ReactGA.initialize('G6-CDQ8YSVF7');

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/portfolio" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/portfolio/Easter-egg" component= {Easteregg} />
          <AppRoute exact path="/portfolio/DormRoomTips" component= {DormRoomTips} />
          <AppRoute exact path="/portfolio/HowToManageTime" component= {HowToManageTime} />
        </Switch>
      )} />
  );
}

export default App;