import { NavLink } from "react-router-dom"
import { FaAlignLeft } from "react-icons/fa6";



const Header = () => {
  return (
    <>
    <div className="hidden md:block bg-orange-400">
      <div className="header-area container mx-auto grid grid-cols-12 ">
          <div className="col-span-2">
            <h3 className="py-10 text-2xl font-bold text-center">Design<span className="text-white">Agency</span></h3>
          </div>

          <div className="col-span-10">

            <ul className="flex float-right">
              <li className="py-10 px-5">
                <NavLink to='/' className='text-lg font-semibold'>Home</NavLink>
              </li>
              <li className="py-10 px-5">
                <NavLink to='/team' className='text-lg font-semibold'>Team</NavLink>
              </li>
              <li className="py-10 px-5">
                <NavLink to='/service' className='text-lg font-semibold'>Service</NavLink>
              </li>
              <li className="py-10 px-5">
                <NavLink to='/projects' className='text-lg font-semibold'>Projects</NavLink>
              </li>
              <li className="py-10 px-5">
                <NavLink to='/testimonials' className='text-lg font-semibold'>Testimonials</NavLink>
              </li>
              <li className="py-8 px-5">
                <button className="btn btn-outline btn-primary">
                  <NavLink to=''>Login</NavLink>
                </button>
              </li>
              <li className="py-8 px-5">
                <button className="btn btn-secondary">
                  <NavLink to=''>Register</NavLink>
                </button>
              </li>
            </ul>

            
            
            
            
            

                  {/* not used yet */}
            
            

          </div>
        </div>
    </div>

      <div className="small-navbar md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
          <FaAlignLeft />
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
