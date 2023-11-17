import Layout from "../Layout/Layout";
import Hero from "../components/Home/Hero";
import Partner from "../components/Home/Partner";
import WorkList from "../components/Home/WorkList";


const Home = () => {
  return (
    <Layout>
      <Hero />
      <Partner />
      <WorkList />
    </Layout>
  )
}

export default Home
