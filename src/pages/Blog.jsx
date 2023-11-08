import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import BlogOne from './../components/Blog/BlogOne';
import BlogFour from './../components/Blog/BlogFour';
import BlogThree from './../components/Blog/BlogThree';
import BlogTwo from './../components/Blog/BlogTwo';


const Blog = () => {
  return (
    <>
      <Header />

      <BlogOne />
      <BlogTwo />
      <BlogThree />
      <BlogFour />

      <Footer />
    </>
  )
}

export default Blog
