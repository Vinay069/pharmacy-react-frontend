import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Medicines} from './Medicines';
import {BrowserRouter, Route,Routes, NavLink} from 'react-router-dom';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className='d-flex justify-content-center m-3'>
        Pharmacy Management System
      </h3>

      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item m-1'>
            <NavLink className="btn btn-light  btn-outline-primary" to="/home" >
              Home
            </NavLink>
            <NavLink className="btn btn-light  btn-outline-primary" to="/department" >
              Department
            </NavLink>
            <NavLink className="btn btn-light  btn-outline-primary" to="/employee" >
              Employee
            </NavLink>
            <NavLink className="btn btn-light  btn-outline-primary" to="/medicines" >
              Medicines
            </NavLink>
          </li>

        </ul>

      </nav>

      <Routes>
        {/* <Route path='/home' component={Home}/> */}
        <Route path="/" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/department" element={<Department/>} />
        <Route path="/employee" element={<Employee/>} />
        <Route path="/medicines" element={<Medicines/>} />
        <Route path="/signin" element={<SignIn/>} />
        
      </Routes>
      
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
