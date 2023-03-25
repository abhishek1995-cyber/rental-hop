function Product_Detail_Features() {
  return (
    <>
      <div className="card mt-5 p-3 ">
        <div className="d-flex justify-content-around ">
          <div className=" box-border col-lg-2 center-block pt-2">
            <img
              src="/assets/images/png/loc-icon.png"
              width="30px"
              className="mb-4"
            />
            <h6 className="font-weight-semibold2 fs-12 mb-2 book-loc-mul">
              Location Timing{" "}
            </h6>
            <p className="fs-10 book-theme">10 AM - 8 PM</p>
          </div>

          <div className=" box-border col-lg-2 center-block pt-2">
            <img
              src="/assets/images/png/security-deposit-icon.png"
              width="30px"
              className="mb-4"
            />
            <h6 className="font-weight-semibold2 fs-12 mb-2 book-loc-mul">
              Security Deposit
            </h6>
            <p className="fs-12 book-theme">
              <i className="fa fa-inr fs-12"></i>
              1500
            </p>
          </div>
          <div className=" box-border col-lg-2 center-block pt-2">
            <img
              src="/assets/images/png/km-limit.png"
              width="30px"
              className="mb-4"
            />
            <h6 className="font-weight-semibold2 fs-12 mb-4 book-loc-mul">
              {" "}
              KM Limit{" "}
            </h6>
            <p className="fs-12 book-theme">250 KM/Day</p>
          </div>
          <div className=" box-border  col-lg-2 center-block pt-2">
            <img
              src="/assets/images/png/extra-km.png"
              width="30px"
              className="mb-4"
            />
            <h6 className="font-weight-semibold2 fs-12 mb-4 book-loc-mul">
              Extra KM{" "}
            </h6>
            <p className="fs-12 book-theme">
              <i className="fa fa-inr fs-12"></i> 4/KM
            </p>
          </div>
          <div className=" box-border col-lg-2 center-block pt-2">
            <img
              src="/assets/images/png/outstation.png"
              width="30px"
              className="mb-4"
            />
            <h6 className="font-weight-semibold2 fs-12 mb-4 book-loc-mul">
              Outstation{" "}
            </h6>
            <p className="fs-12 book-theme">Not Allowed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_Detail_Features;