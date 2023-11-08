import { Link } from "react-router-dom"


const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <Link className="btn btn-secondary normal-case text-xl m-5" to='/'>Home</Link>
        <Link className="btn btn-primary normal-case text-xl m-5" to='/service'>Service</Link>
        <Link className="btn btn-warning normal-case text-xl m-5" to='/about'>About</Link>
        <Link className="btn btn-accent normal-case text-xl m-5" to='/project'>Project</Link>
        <Link className="btn btn-info normal-case text-xl m-5" to='/blog'>Blog</Link>
        <Link className="btn btn-success normal-case text-xl m-5" to='/contact'>Contact</Link>
    </div>
    </>
  )
}

export default Header
