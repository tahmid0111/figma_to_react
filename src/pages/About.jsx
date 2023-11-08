
import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer"
import AboutOne from './../components/About/AboutOne';
import AboutTwo from './../components/About/AboutTwo';
import AboutThree from './../components/About/AboutThree';
import AboutFour from './../components/About/AboutFour';

const About = () => {
  return (
    <>
      <Header />

        <AboutOne />
        <AboutTwo />
        <AboutThree />
        <AboutFour />

      <Footer />
    </>
  )
}

export default About
