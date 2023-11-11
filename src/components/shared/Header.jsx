import { NavLink } from "react-router-dom"



const Header = () => {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/'>Team</NavLink>
      <NavLink to='/'>Service</NavLink>
      <NavLink to='/'>Projects</NavLink>
      <NavLink to='/'>Testimonials</NavLink>
      <NavLink to=''>Login</NavLink>
      <NavLink to=''>Register</NavLink>
    </>
  )
}

export default Header
