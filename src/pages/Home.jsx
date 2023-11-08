
import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer"

import HomeOne from './../components/Home/HomeOne';
import HomeTwo from './../components/Home/HomeTwo';
import HomeThree from './../components/Home/HomeThree';
import HomeFour from './../components/Home/HomeFour';


const Home = () => {
  return (
    <>
        <Header />

        <HomeOne />
        <HomeTwo />
        <HomeThree />
        <HomeFour />

        <Footer />
    </>
  )
}

export default Home
