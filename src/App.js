import React from 'react';
import GlobalStyle from './globalStyles';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import {Navbar} from './components';
import Featurepage from './pages/HomePage/Featurepage';
import Aboutpage from './pages/HomePage/Aboutpage';
import GetStartedPage from './pages/HomePage/GetStartedPage';


function App() {
  return (
    <div className="App">
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component ={Home} />
        <Route path="/features" exact component ={Featurepage}/>
        <Route path="/about-us" exact component={Aboutpage}/>
        <Route path="/sign-up" exact component={GetStartedPage}/>
      </Switch>
      
    </Router>
      
      
    </div>
  );
}

export default App;
