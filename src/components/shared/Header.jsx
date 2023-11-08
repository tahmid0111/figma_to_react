import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <NavLink className="btn btn-secondary normal-case text-xl m-5" to='/'>Home</NavLink>
        <NavLink className="btn btn-primary normal-case text-xl m-5" to='/service'>Service</NavLink>
        <NavLink className="btn btn-warning normal-case text-xl m-5" to='/about'>About</NavLink>
        <NavLink className="btn btn-accent normal-case text-xl m-5" to='/project'>Project</NavLink>
        <NavLink className="btn btn-info normal-case text-xl m-5" to='/blog'>Blog</NavLink>
        <NavLink className="btn btn-success normal-case text-xl m-5" to='/contact'>Contact</NavLink>
    </div>
    </>
  )
}

export default Header
