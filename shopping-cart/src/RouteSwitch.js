import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./GlobalComponents/FooterComponent";
import Header from "./GlobalComponents/Header";
import BodyComponent from "./HomepageComponents/BodyComponent";
import ShopBodyComponent from "./ShopComponents/ShopBodyComponent"
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<BodyComponent />} />
        <Route path="/shop" element={<ShopBodyComponent />} />
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  );
};
export default RouteSwitch;