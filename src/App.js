import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import Knowledges from './pages/Knowledges';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Switch>
             <Route path = "/" exact component ={Home}/>
             <Route path = "/Competences" component = {Knowledges}/>
             <Route path = "/Portfolio" component = {Portfolio}/>
             <Route path = "/Contact" component = {Contact}/>
             <Route component = {NotFound}/>
             </Switch>   
      </BrowserRouter>
    </>
  );
};

export default App;