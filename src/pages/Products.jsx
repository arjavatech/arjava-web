import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Products = () => {
  return (
    <div>
      <Navbar active="Products" img={true} />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Products;