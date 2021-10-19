import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Home/Services/Services';
import AboutUs from './pages/Home/AboutUs/AboutUs';
import ContactUs from './pages/Home/ContactUs/ContactUs';
import Header from './pages/Shared/Header/Header';
import Gallery from './pages/Home/Gallery/Gallery';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/gallery">
          <Gallery></Gallery>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
