import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Router>
         <Header></Header>
         <Switch>
         <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/about">
            <AboutUs></AboutUs>
          </Route> */}
          {/* <Route path="/services">
            <ServicesAll></ServicesAll>
          </Route>  */}
          {/* <Route path="/coaches">
            <Coaches></Coaches>
          </Route> */}
         </Switch>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
