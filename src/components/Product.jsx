import Search from "./Search";
import React, { useState } from "react";
import Sidebar_Loc from "./Sidebar_Loc";
import Card from "./Card";

function Product() {
  const [cityId, setCityId] = useState("");
  const [bikes, setBikes] = useState("");

  const [locArr, setLocArr] = useState([]);

  return (
    <>
      <section className="sptb-sm bg-white">
        <div className=" container">
          <>
            <Search cityId={cityId} setCityId={setCityId} setBikes={setBikes} />
          </>
          <>
            <div className="row">
              <Sidebar_Loc
                cityId={cityId}
                locArr={locArr}
                setLocArr={setLocArr}
              />
              <Card bikes={bikes}
                locArr={locArr}
              />
            </div>
          </>
        </div>
      </section>
    </>
  );
}

export default Product;
