import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import CartFather from "./pages/CartFather";
import Promotion from "./pages/Promotion";
import Information from "./pages/Information";
import ShipperFeature from "./features/ShipperFeature";
import CartItem from "./components/CartItem";
import Pay from "./components/Pay";
import ShowDetailsFeature from "./features/ShowDetailsFeature";
import End from "./components/End";
import Account from "./Bonus/Account";
import Signin from "./Bonus/Sign-in";
import MapBox from "./Bonus/Mapbox";
import SearchProduct from "./SearchProduct";
import ProductFeature from "../Tiki/features/Product";
import HomeOne from "./pagesOne/Home";
import SimpleTabs from "../src/Filter";
import FilterProduct from "./FilterProduct";
import ShowPay from "../src/componentsOne/Pay/ShowPay";
import ProductOne from "./CartOne/ProductOne";
import CartOne from "./CartOne/CartOne";
import ListPage from "../Tiki/features/Product/pages/ListPage";
import Boss from "./componentsOne/Product/Boss";
import ProductDetailsBonus from "./featuresOne/ProductDetailsBonus";
import Bonus from "./componentsOne/Details/Bonus";
import HomeNew from "../src/components/HomeNew";
import ProductsNew from "../src/components/ProductsNew";
import ProductNew from "../src/components/ProductNew";
import CartNew from "../src/components/CartNew";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/cart" element={<CartFather />} />
          <Route exact path="/promotion" element={<Promotion />} />
          <Route exact path="/information" element={<Information />} />
          <Route exact path="/shipper" element={<ShipperFeature />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart-item" element={<CartItem />} />
          <Route exact path="/pay" element={<Pay />} />
          <Route exact path="/details" element={<ShowDetailsFeature />} />
          <Route exact path="/end" element={<End />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/sign-in" element={<Signin />} />
          <Route exact path="/mapbox" element={<MapBox />} />
          <Route exact path="/searchproduct" element={<SearchProduct />} />
          <Route exact path="/productfeature" element={<ProductFeature />} />
          <Route exact path="/homeone" element={<HomeOne />} />
          <Route exact path="/filter" element={<SimpleTabs />} />
          <Route exact path="/filterproduct" element={<FilterProduct />} />
          <Route exact path="/showpay" element={<ShowPay />} />
          <Route exact path="/listpage" element={<ListPage />} />
          <Route exact path="/boss" element={<Boss />} />
          <Route exact path="/bossbonus" element={<Bonus />} />
          <Route exact path="/homeNew" element={<HomeNew />} />
          <Route exact path="/products" element={<ProductsNew />} />
          <Route exact path="/products/:id" element={<ProductNew />} />
          <Route exact path="/cartNew" component={<CartNew />} />
        </Routes>
      </div>
    </Router>
  );
}
