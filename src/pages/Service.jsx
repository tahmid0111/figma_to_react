import ServiceFour from "../components/Service/ServiceFour"
import ServiceOne from "../components/Service/ServiceOne"
import ServiceThree from "../components/Service/ServiceThree"
import ServiceTwo from "../components/Service/ServiceTwo"
import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"


const Service = () => {
  return (
    <>
      <Header />

      <ServiceOne />
      <ServiceTwo />
      <ServiceThree />
      <ServiceFour />

      <Footer />
    </>
  )
}

export default Service
