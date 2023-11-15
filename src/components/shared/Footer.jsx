import Layout from "../../Layout/Layout"

import { FaFacebook, FaXTwitter, FaLinkedinIn , FaInstagram   } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <div className="footer-area">
        <div className="grid grid-cols-12 container mx-auto">
          <div className="col-span-4 text-center">
            <h3>WEB LOGO</h3>
            <p>Some footer text about the Agency. Just a little description to help people understand you better</p>
            <ul className="flex">
              <li>
                <a href="">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="">
                  <FaXTwitter  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-4 text-center">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="">Services</a></li>
              <li><a href="">Portfolio</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-span-4 text-center">
            <h3>Address</h3>
            <p>Design Agency Head Office. Airport Road United Arab Emirate</p>
          </div>
        </div>

        <div className="copy-right">
          <p>Copy Right Design Agency 2022</p>
        </div>
      </div>
    </>
  )
}

export default Footer
