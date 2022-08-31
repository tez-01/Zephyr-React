import './App.css';
import {Helmet} from "react-helmet"
import Header from "./components/home/header/Header"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import HomePage from './components/pageContent/HomePage';
import Footer from './components/home/footer/Footer';
import Pages from './components/pages/Page';
import Portfolio from './components/portfolio/Portfolio';
import Blogs from './components/blogs/Blogs';
import Element from './components/elements/Element';
import Shop from './components/shop/Shop';

function App() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>ZEPHYR. New Edge Of The Theme Experience!</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
       </Helmet>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/elements" element={<Element />} />
          <Route path="/shop" element={<Shop />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
