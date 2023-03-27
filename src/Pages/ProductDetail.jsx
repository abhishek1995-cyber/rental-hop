import Product_detail_Hero from "../components/Product_Detail_Hero";
import Product_detail_Footer from "../components/Product_Detail_Footer";
import Product_detail_Sidebar from "../components/Product_Detail_Sidebar";
import { useEffect, useLayoutEffect } from "react";

function Product_Detail() {

  useLayoutEffect(() => {

    var sidebar_deskview = document.querySelector(".sidebar_deskview");

    window.addEventListener("scroll", () => {

      if (window.scrollY > 200) {
        sidebar_deskview.classList.add("sidebar_stick");       
      }

      if (window.scrollY < 1880) {
        sidebar_deskview.classList.remove("sidebar_stick");
      }

    });
  }, []);

  return (
    <>
      <section className="sptb-sm bg-white mt-7 ">
        <div className="container sm-p0 ">
          <div className="d-flex ">
            <Product_detail_Hero />
            <div className="sidebar_deskview ">
              <Product_detail_Sidebar />
            </div>
          </div>
        </div>
      </section>

      <Product_detail_Footer />
    </>
  );
}

export default Product_Detail;
