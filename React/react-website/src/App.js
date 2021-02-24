import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Testimonials from './components/pages/Testimonials';
import ContactUs from './components/pages/ContactUs';
import Listings from './components/pages/Listings';
import OurTeam from './components/pages/OurTeam';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/our-team" exact component={OurTeam} />
        <Route path="/listings" exact component={Listings} />
        <Route path="/testimonials" exact component={Testimonials} />
        <Route path="/contact-us" exact component={ContactUs} />
      </Switch>
    </Router>

  );
}

export default App;
