import "bootstrap/dist/css/bootstrap.min.css";
import "@style/style.css";
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import About from "@components/About"
import Services from "@components/Services"
import Portfolio from "@components/Portfolio";
import Contact from "@components/Contact";
import Footer from "@components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <Services/>
      <hr />
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
