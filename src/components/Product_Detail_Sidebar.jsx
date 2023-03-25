function Product_Detail_Sidebar() {
  return (
    <>
      <div className="card ">
       
          <div className=" pt-3">
            <div className=" ">
              <h4 className="text-center mb-1 fs-14 pt-5">Total Rent for 3 Days</h4>
              <h3 className="text-center mb-1 fs-20">
                <i className="fa fa-inr fs-18"></i> 1500
              </h3>
              <p className="text-center mb-1 fs-12 price-hr">
                <i className="fa fa-inr fs-12"></i> 500/600 Per 24 Hrs{" "}
              </p>
              <p className=" mb-1 fs-20 font-weight-bold book-loc d-flex justify-content-center ">
                <i className="fa-solid fa-location-dot "></i> Karol Bagh K{" "}
                <a
                  className="btn-book fs-10 text-white p-1 mb-1 mx-2
									"
                >
                  4.3
                </a>
              </p>
              <p className="text-center font-weight-bold fs-14 book-loc-mul ">
                + 6 More Locations<i className="fa-solid fa-arrow-right mx-2"></i>
              </p>
            </div>
            <div className="p-1 px-4 box-border bradius1 m-2">
              <div className="d-flex justify-content-between  ">
                <p className="fs-12 font-weight-semibold mb-0  book-theme">
                  Delhi <br />
                </p>
                <p className="fs-12 font-weight-semibold mb-0 book-loc-mul">
                  Modify Search <br />
                </p>
              </div>
              <div className="flex">
                <p className="fs-12 mb-0 font-weight-bold">
                  30 Nov <i className="fa-solid fa-motorcycle"></i>
                </p>
                <p className="fs-12 mb-0 font-weight-bold">
                  --------3 Days---------
                </p>
                <p className="fs-12 mb-0 font-weight-bold">
                 
                  <i className="fa-solid fa-motorcycle"></i> 2 Dec
                </p>
              </div>
              <div className="d-flex justify-content-between price-hr">
                <p className="fs-10 ">
                  11 AM, Tue <br />
                </p>
                <p className="fs-10 ">
                  8 PM, Tue <br />
                </p>
              </div>
            </div>
            <div className="border-line-bottom">
              <div className="d-flex justify-content-center">
                <a
                  href=""
                  className="btn btn-primary bradius1  mb-0 px-5"
                >
                  Add to Cart <br />
                  {/* <span className="fs-10">
                    Pay Just @ <i className="fa fa-inr fs-10"></i> 533{" "}
                  </span> */}
                </a>
              </div>
              {/* <h5 className="text-center fs-10 book-theme">
                Remaining at the time of Pickup
              </h5> */}
              <div className="py-1 d-flex align-items-center justify-content-center">
                <div className="p-1">
                  <i className="fa-solid fa-check fs-10"></i>
                  <br />
                  <i className="fa-solid fa-check fs-10 "></i>
                  <br />
                  <i className="fa-solid fa-check fs-10 "></i>
                  <br />
                </div>
                <div>
                  <p className=" mb-0 fs-12 font-weight-bold ">
                    Instant Confirmation
                  </p>
                  <p className=" mb-0 fs-12 font-weight-bold ">
                    Best in class Service
                  </p>
                  <p className=" mb-0 fs-12 font-weight-bold ">
                    24*7 Over Call Assistance
                  </p>
                </div>
              </div>
            </div>
            <figure className="">
              <img src="/assets/images/png/razorpay.jpg" />
            </figure>
          </div>
        
      </div>
    </>
  );
}

export default Product_Detail_Sidebar;