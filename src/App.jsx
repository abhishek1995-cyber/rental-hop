import  React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import ProductPage from "./Pages/ProductPage";
import ProductDetail from "./Pages/ProductDetail";
import "./styles/index.css"

function App() {
    return <>
        <Header />
        {/* <ProductDetail /> */}
        <ProductPage/>
        {/* <Login /> */}
        <Footer />
    </>
    

}

export default App