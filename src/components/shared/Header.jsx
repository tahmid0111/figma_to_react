import { NavLink } from "react-router-dom"



const Header = () => {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/team'>Team</NavLink>
      <NavLink to='/service'>Service</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/testimonials'>Testimonials</NavLink>

            {/* not used yet */}
      <NavLink to=''>Login</NavLink>
      <NavLink to=''>Register</NavLink>

      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/team'>Team</NavLink></li>
            <li><NavLink to='/service'>Service</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/testimonials'>Testimonials</NavLink></li>

          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
