
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contact from './Pages/Contact';

import Home from './Pages/Home';
import Services from './Pages/Services';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (

    <>
    <Router>
    <Header/>
  
    <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/services" component={Services}>
            <Services/>
          </Route>
          <Route path="/Contact" component={Contact}>
            <Contact/>
          </Route>
        </Switch>
      
    </Router>

    <Footer/>
    </>
   
  );
}

export default App;
