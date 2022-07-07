import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Medicines} from './Medicines';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

function App() {
  return (
  
    <div className="App container">
      <h3 className='d-flex justify-content-center m-3'>
        Pharmacy Management System
      </h3>

      

      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/department" component={Department} />
          <Route exact path="/Employee" component={Employee} />
          <Route exact path="/medicines" component={Medicines} />
        </Switch>
      </Router>

      
      
    </div>
    
    
    
  );
}

export default App;
