import Hero from "./Hero";
import './Home.css';
import PopularProducts from "./PopularProducts";
import Deals from "./Deals";
import ProductsOnSale from "./ProductsOnSale";
import Showcase from "./Showcase";
const Home = ():JSX.Element =>{
    return(
        <div className='home'>
            <Hero />     
            <PopularProducts />
            <Deals />
            <ProductsOnSale />
            <Showcase />
        </div>
    )
}

export default  Home;