import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import ContactOne from './../components/Contact/ContactOne';
import ContactFour from './../components/Contact/ContactFour';
import ContactThree from './../components/Contact/ContactThree';
import ContactTwo from './../components/Contact/ContactTwo';


const Contact = () => {
  return (
    <>
      <Header />

      <ContactOne />
      <ContactTwo />
      <ContactThree />
      <ContactFour />

      <Footer />
    </>
  )
}

export default Contact
