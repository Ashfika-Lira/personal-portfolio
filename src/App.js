import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import AboutMe from './components/AboutMe/AboutMe';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details';
import Projects from './components/Projects/Projects';

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
          <Route path="/about">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/projects">
              <Projects/>
            </Route>
          <Route path="/blogs">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <ContactMe></ContactMe>
          </Route>
          <Route path="/details/:id">
              <Details/>
            </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
         </Switch>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
