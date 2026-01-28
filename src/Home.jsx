import useCartOnHome from "./useCartOnHome";
import Header from "./header";
import About from "./About";
import Apresentação from "./Apresentação";
import Catalogo from "./Catalogo";
import Endereço from "./Endereço";
import Footer from "./Footer";

function Home() {
  useCartOnHome();

  return (
    <>
        <Header/>
        
        <Apresentação/>

        <About/>

        <Catalogo/>

        <Endereço/>

        <Footer/>
    </>
);
}
export default Home