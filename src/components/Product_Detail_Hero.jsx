import Product_detail_Terms from "./Product_Detail_Terms";
import Product_detail_Addons from "./Product_Detail_Addons";
import Product_detail_Features from "./Product_Detail_Features";



function Product_Detail_Hero() {
  return (
    <>
      <div className="col-xl-8 col-lg-7 col-md-12 sm-p0">
        <div className="card overflow-hidden">
          <div className="card-body">
            <div className="item-det">
              <a href="" className="text-dark">
                <h3 className="font-weight-semibold2 mb-0">
                  Royal Enfield Himalayan BS6{" "}
                </h3>
              </a>
              <div className="flex align-items-center row-view">
                <ul className="flex list-unstyled">
                  <li className="me-5">
                    <a href="" className="icons fs-10">
                      <i className="fe fe-home text-muted me-1 absolute-link"></i>{" "}
                      Motorcycle
                    </a>
                  </li>
                  <li className="me-5">
                    <a href="" className="icons fs-10">
                      <i className="fe fe-map-pin text-muted me-1 absolute-link"></i>{" "}
                      Karol Bagh
                    </a>
                  </li>
                  <li className="me-5">
                    <a href="" className="icons fs-10">
                      <i className="fe fe-eye text-muted me-1 absolute-link"></i>{" "}
                      765
                    </a>
                  </li>
                </ul>
                <div className=" d-inline-flex align-items-center">
                  <div
                    className="rating-star sm block my-rating-5 me-2 mb-1"
                    data-stars="4s"
                  ></div>{" "}
                  4.5
                </div>
              </div>
            </div>
            <div>
              <div className="item-tags1">
                <div className="btn-book tag-option text-white">Hotseller</div>
                <div className="btn-book tag-option text-white">Cruiser</div>
              </div>
              <img
                src="/assets/images/products/category/royal-enfield-himalayan.jpeg"
                alt="img"
              />
            </div>
          </div>
          <div className="card-body p-4">
            <div className="flex flex-wrap ">
              <div className="d-flex align-items-center text-start col-4 mb-1">
                <img src="/assets/images/png/bike.png" width="24px" />
                <div className="ms-2 ">
                  <h6 className="mb-0 fs-10 font-weight-semibold">Power</h6>
                  <h6 className="fs-10 font-weight-bold">350 cc</h6>
                </div>
              </div>
              <div className="d-flex align-items-center text-start col-4 mb-1">
                <img src="/assets/images/png/manual.png" width="24px" />
                <div className="ms-2">
                  <h6 className="mb-0 fs-10 font-weight-semibold">Manual</h6>
                  <h6 className="fs-10 font-weight-bold">6 gear</h6>
                </div>
              </div>
              <div className="d-flex align-items-center text-start col-4 mb-1">
                <img src="/assets/images/png/mileage.png" width="24px" />
                <div className="ms-2">
                  <h6 className="mb-0 fs-10 font-weight-semibold">Mileage</h6>
                  <h6 className="fs-10 font-weight-bold">35-40/ltr</h6>
                </div>
              </div>
              <div className="d-flex align-items-center text-start col-4 mb-1">
                <img src="/assets/images/png/top_speed.png" width="24px" />
                <div className="ms-2">
                  <h6 className="mb-0 fs-10 font-weight-semibold">Top Speed</h6>
                  <h6 className="fs-10 font-weight-bold">120km/hr</h6>
                </div>
              </div>
              <div className="d-flex align-items-center text-start col-4 mb-1">
                <img src="/assets/images/png/team.png" width="24px" />
                <div className="ms-2">
                  <h6 className="mb-0 fs-10 font-weight-semibold">Seater</h6>
                  <h6 className="fs-10 font-weight-bold">Two</h6>
                </div>
              </div>
              <div className="d-flex align-items-center text-start col-4 mb-1">
                <img src="/assets/images/png/full_tank.png" width="24px" />
                <div className="ms-2">
                  <h6 className="mb-0 fs-10 font-weight-semibold">
                    Tank Capacity
                  </h6>
                  <h6 className="fs-10 font-weight-bold">14 Ltr</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body p-4 ">
            <h5 className="fs-12">
              Himalayan BS 6 is one of the most popular bikes frequented for
              mountain riding. Originally launched in 2018 it was a instant
              bestseller amount Bike enthusiasts. Himalayan BS 6 is one of the
              most popular bikes frequented for mountain riding.Originally
              launched in 2018 it was a instant bestseller amount Bike
              enthusiasts.
            </h5>
          </div>
        </div>
        <Product_detail_Features />
        <Product_detail_Addons />
        <Product_detail_Terms />
      </div>
    </>
  );
}

export default Product_Detail_Hero;
