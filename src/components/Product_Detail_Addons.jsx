import { useState } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
function Product_Detail_Addons() {
  const [helmet, setHelmet] = useState(1);

  const[isOutstation,setOutstation] = useState(false)
  const[isDelivery,setDelivery] = useState(false)
  const[isReturn,setReturn] = useState(false)

  function handleChange(e, opt) {
    if (e.target.getAttribute("name") === "helmetp") {
      if (opt === "dec") {
        if (helmet === 0) return;
        setHelmet(helmet - 1);
      } else {
        setHelmet(helmet + 1);
      }
    }
  }

  return (
    <>
    
        <div className="details-accordion mb-5">
          <div className="accordion" id="accordionExample2">
            <div className="card mb-0 shadow-none">
              <a
                href=""
                className="fs-16 font-weight-semibold card-header bg-transparent"
                id="headingOne1"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne1"
                aria-expanded="true"
                aria-controls="collapseOne1"
              >
                Available Add Ons
              </a>
              <div
                id="collapseOne1"
                className="collapse show"
                aria-labelledby="headingOne1"
                data-parent="#accordionExample2"
              >
                <div className="card-body ">
                  <div className="d-flex mb-2 column-view flex-wrap">
                    <div className="box-border d-flex align-items-center p-3  col-lg-5 bradius1  col-sm-12 mb-2 mx-1">
                      <img src="/assets/images/png/helmet.jpg" width="30px" />
                      <h6 className="font-weight-semibold fs-12 mx-6 ">
                        Complimentary Helmet
                      </h6>
                      <a className=" btn-book text-white px-3 bradius1 ">
                        1
                      </a>
                    </div>
                    <div className="box-border d-flex align-items-center  p-3 col-lg-5 bradius1 col-sm-12 mb-2 mx-1">
                      <img src="/assets/images/png/helmet.jpg" width="30px" />
                      <div className="mx-6">
                        <h6 className="font-weight-semibold fs-12">
                          Pillon Helmet
                        </h6>
                        <h6 className="fs-10">
                          <i className="fa fa-inr fs-12  "></i> 50 per 24 Hrs
                        </h6>
                      </div>
                      <div className=" margin-left-sm-8">
                        <a className="btn-book bradius1">
                          <i
                            className="fa-solid fa-minus text-white fs-10 px-2 "
                            onClick={(e) => handleChange(e, "dec")}
                            name="helmetp"
                          ></i>
                        </a>
                        <a className="fs-24 btn-book px-2 text-white bradius1">
                          {helmet}
                        </a>
                        <a className="btn-book bradius1">
                          <i
                            className="fa-solid fa-plus text-white fs-10 px-2 "
                            onClick={(e) => handleChange(e, "inc")}
                            name="helmetp"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="box-border d-flex align-items-center  py-3 col-lg-5 bradius1 col-sm-12 mb-2 mx-1">
                      <img src="/assets/images/png/gear.jpg" width="30px" />
                      <div className="mx-6">
                        <h6 className="font-weight-semibold fs-12">
                          Jacket XL
                        </h6>
                        <h6 className="fs-10">
                          <i className="fa fa-inr fs-12  "></i> 200 per 24 Hrs
                        </h6>
                      </div>
                      <a className="btn-book text-white p-1 fs-10 px-2 bradius1 ms-6 margin-left-sm-8">
                        Add +
                      </a>
                    </div>
                    <div className="box-border d-flex align-items-center  py-3 col-lg-5 bradius1 col-sm-12  mb-2 mx-1">
                      <img src="/assets/images/png/gear.jpg" width="30px" />
                      <div className="mx-6">
                        <h6 className="font-weight-semibold fs-12">
                          Jacket L
                        </h6>
                        <h6 className="fs-10">
                          <i className="fa fa-inr fs-12  "></i> 200 per 24 Hrs
                        </h6>
                      </div>
                      <a className="btn-book text-white p-1 px-2 fs-10 bradius1 ms-6 margin-left-sm-8">
                        Add +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-0 shadow-none">
              <a
                href=""
                className="fs-16 font-weight-semibold collapsed card-header bg-transparent"
                id="headingTwo1"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo1"
                aria-expanded="true"
                aria-controls="collapseTwo1"
              >
                Additional Services
              </a>
              <div
                id="collapseTwo1"
                className="collapse"
                aria-labelledby="headingTwo1"
                data-parent="#accordionExample2"
              >
                <div className="card-body ">
                  <div className="d-flex justify-content-between box-border align-items-center p-1 mb-2 bradius1 col-lg-10 column-view">
                    <div className="d-flex align-items-center justify-content-between col-lg-5">
                      <div>
                        <p className="font-weight-semibold mb-1">Outstation </p>
                        <p className="fs-10">
                          <i className="fa fa-inr fs-12  "></i> 1300
                        </p>
                      </div>
                      <BootstrapSwitchButton
                        size="xs"
                        checked={isOutstation}
                        onChange={()=>setOutstation(!isOutstation)}
                        width={70}
                        onlabel="Yes"
                        offlabel="No"
                        offstyle="green"
                      />
                    </div>
                    <div className={isOutstation?"":"cust_address"}>
                      <div className="d-flex align-items-center ">
                        <div className="form-group pt-3">
                          <input
                            type="text"
                            className="search-btn fs-10"
                            placeholder="Enter Your Destination"
                          />
                        </div>
                        <div className="mx-2 fs-10 btn-navy-blue font-weight-bold">
                          6 KM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between box-border align-items-center p-1 mb-2 bradius1 col-lg-10 column-view">
                    <div className="d-flex align-items-center justify-content-between col-lg-5">
                      <div>
                        <p className="font-weight-semibold mb-1">Delivery </p>
                        <p className="fs-10">
                          {" "}
                          <i className="fa fa-inr fs-12  "></i> 500
                        </p>
                      </div>
                      <BootstrapSwitchButton
                        size="xs"
                         checked={isDelivery}
                        onChange={()=>setDelivery(!isDelivery)}
                        width={70}
                        onlabel="Yes"
                        offlabel="No"
                        offstyle="green"
                      />
                    </div>
                    <div className={isDelivery?"":"cust_address"}>
                      <div className="d-flex align-items-center ">
                        <div className="form-group pt-3">
                          <input
                            type="text"
                            className="search-btn fs-10"
                            placeholder="Enter Your Destination"
                          />
                        </div>
                        <div className="mx-2 fs-10 btn-navy-blue font-weight-bold">
                          6 KM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between box-border align-items-center p-1 bradius1 col-lg-10 column-view">
                    <div className="d-flex align-items-center justify-content-between col-lg-5">
                      <div>
                        <p className="font-weight-semibold mb-1">
                          Return Pickup{" "}
                        </p>
                        <p className="fs-10">
                          <i className="fa fa-inr fs-12  "></i> 500
                        </p>
                      </div>

                      <BootstrapSwitchButton
                        size="xs"
                        checked={isReturn}
                        onChange={()=>setReturn(!isReturn)}
                        width={70}
                        onlabel="Yes"
                        offlabel="No"
                        offstyle="green"
                      />
                    </div>
                    <div className={isReturn ? "":"cust_address"}>
                      <div className="d-flex align-items-center ">
                        <div className="form-group pt-3">
                          <input
                            type="text"
                            className="search-btn fs-10"
                            placeholder="Enter Your Destination"
                          />
                        </div>
                        <div className="mx-2 fs-10 btn-navy-blue font-weight-bold">
                          6 KM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-0 ">
              <a
                href=""
                className="fs-16 font-weight-semibold collapsed card-header bg-transparent"
                id="headingThree1"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree1"
                aria-expanded="true"
                aria-controls="collapseThree1"
              >
                About Location
              </a>
              <div
                id="collapseThree1"
                className="collapse"
                
              >
                <div className="card-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro quisquam doloremque, nostrum sed similique officia
                  soluta tempore nemo est exercitationem repellendus incidunt
                  error perspiciatis quas? Voluptas nulla consequatur
                  accusantium minus.
                  <div className="d-flex align-items-start column-view">
                    <ul style={{ listStyleType: "circle" }} className="p-3">
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </li>
                    </ul>
                    <img src="/assets/images/png/map.jpg" width="350px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}
export default Product_Detail_Addons;
