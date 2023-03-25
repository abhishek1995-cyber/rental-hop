function Product_Detail_Addons (){
    return (
        <>
            <div className="">
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
                  <div className="card-body leading-normal-2">
                    <div className="d-flex mb-2 column-view flex-wrap">
                      <div className="box-border d-flex align-items-center p-3  col-lg-5 bradius1  col-sm-12 mb-2 mx-1">
                        <img src="/assets/images/png/helmet.jpg" width="30px" />
                        <h6 className="font-weight-semibold fs-12 mx-6 ">
                          Complimentary Helmet{" "}
                        </h6>
                        <a className=" btn-book text-white px-3 bradius1 ms-5">1</a>
                      </div>
                      <div className="box-border d-flex align-items-center  p-3 col-lg-5 bradius1 col-sm-12 mb-2 mx-1">
                        <img src="/assets/images/png/helmet.jpg" width="30px" />
                        <div className="mx-6">
                          <h6 className="font-weight-semibold fs-12">
                            Pillon Helmet{" "}
                          </h6>
                          <h6 className="fs-10">
                            <i className="fa fa-inr fs-12  "></i> 50 per 24 Hrs{" "}
                          </h6>
                        </div>
                        <div className="ms-6 margin-left-sm">
                          <a className="btn-book bradius1 ">
                            <i className="fa-solid fa-minus text-white fs-10 px-2 "></i>
                          </a>
                          <a className="fs-24 btn-book px-2 text-white bradius1">
                            1
                          </a>
                          <a className="btn-book bradius1">
                            <i className="fa-solid fa-plus text-white fs-10 px-2 "></i>
                          </a>
                        </div>
                      </div>
                      <div className="box-border d-flex align-items-center  py-3 col-lg-5 bradius1 col-sm-12 mb-2 mx-1">
                        <img src="/assets/images/png/gear.jpg" width="30px" />
                        <div className="mx-6">
                          <h6 className="font-weight-semibold fs-12">Jacket XL </h6>
                          <h6 className="fs-10">
                            <i className="fa fa-inr fs-12  "></i> 200 per 24 Hrs{" "}
                          </h6>
                        </div>
                        <a className="btn-book text-white p-1 fs-10 px-2 bradius1 ms-8 margin-left-sm-8">
                          Add +
                        </a>
                      </div>
                      <div className="box-border d-flex align-items-center  py-3 col-lg-5 bradius1 col-sm-12  mb-2 mx-1">
                        <img src="/assets/images/png/gear.jpg" width="30px" />
                        <div className="mx-6">
                          <h6 className="font-weight-semibold fs-12">Jacket L </h6>
                          <h6 className="fs-10">
                            <i className="fa fa-inr fs-12  "></i> 200 per 24 Hrs{" "}
                          </h6>
                        </div>
                        <a className="btn-book text-white p-1 px-2 fs-10 bradius1 ms-8 margin-left-sm-8">
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
                  <div className="card-body leading-normal-2 ">
                    <div className="d-flex justify-content-between box-border align-items-center p-1 mb-2 bradius1 col-lg-10 column-view">
                      <div className="d-flex align-items-center justify-content-between col-lg-5">
                        <div>
                          <p className="font-weight-semibold mb-1">Outstation </p>
                          <p className="fs-10">
                            <i className="fa fa-inr fs-12  "></i> 1300
                          </p>
                        </div>
                        <div className="mx-4">
                          <a className=" box-border fs-10 p-1 ">No</a>
                          <a className="box-border btn-book text-white fs-10 p-1">
                            Yes
                          </a>
                        </div>
                      </div>
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
                    <div className="d-flex justify-content-between box-border align-items-center p-1 mb-2 bradius1 col-lg-10 column-view">
                      <div className="d-flex align-items-center justify-content-between col-lg-5">
                        <div>
                          <p className="font-weight-semibold mb-1">Delivery </p>
                          <p className="fs-10">
                            {" "}
                            <i className="fa fa-inr fs-12  "></i> 500
                          </p>
                        </div>
                        <div className="mx-4">
                          <a className=" fs-10  box-border p-1 ">No</a>
                          <a className="fs-10 box-border btn-book text-white p-1">
                            Yes
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center ">
                        <div className="form-group pt-3">
                          <input
                            type="text"
                            className="search-btn fs-10"
                            placeholder="flip content required"
                          />
                        </div>
                        <div className="mx-2 fs-10 book-loc font-weight-bold">
                          6 KM
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

                        <div className="mx-4">
                          <a className=" btn-book text-white  box-border fs-10 p-1">
                            No
                          </a>
                          <a className="p-1 box-border fs-10 ">Yes</a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center ">
                        <div className="form-group pt-3">
                          <input
                            type="text"
                            className="search-btn fs-10"
                            placeholder=""
                            style={{border:"1px solid #fff"}}
                          />
                        </div>
                        <div className="mx-2 fs-10 text-white">6Km</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-0 shadow-none">
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
                  aria-labelledby="headingThree1"
                  data-parent="#accordionExample2"
                >
                  <div className="card-body leading-normal-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro quisquam doloremque, nostrum sed similique officia
                    soluta tempore nemo est exercitationem repellendus incidunt
                    error perspiciatis quas? Voluptas nulla consequatur
                    accusantium minus.
                    <div className="d-flex align-items-start column-view">
                      <ul style={{listStyleType: "circle"}} className="p-3">
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
        </div>
        </>
    )
}
export default Product_Detail_Addons;