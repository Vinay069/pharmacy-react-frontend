import { NavLink} from 'react-router-dom';
export default function navbar(){
    return(
        <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item m-1'>
            <NavLink className="btn btn-light  btn-outline-primary" to="/home" >
              Home
            </NavLink>
            {/* <NavLink className="btn btn-light  btn-outline-primary" to="/department" >
              Department
            </NavLink>
            <NavLink className="btn btn-light  btn-outline-primary" to="/employee" >
              Employee
            </NavLink> */}
            <NavLink className="btn btn-light  btn-outline-primary" to="/medicines" >
              Medicines
            </NavLink>
          </li>

        </ul>

      </nav>
    )
}