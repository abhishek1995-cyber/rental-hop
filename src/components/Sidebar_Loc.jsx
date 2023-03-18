import React, { useState } from "react";
import Popup from "./Popup";

function Sidebar_Loc() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-12">
        <div className="card">
          <div className="card-header flex">
            <h3 className="card-title">Locations</h3>
            <div className=" filter-icon">    
                <img
                  src="/assets/images/png/icons8-adjust-50.png"
                  width="32px" onClick={() => setButtonPopup(true)}
                />
              <>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <div className=" card px-3">
                    <div className="filter-product-checkboxs pt-9">
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox1"
                         
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            {" "}
                            Residential
                            <span className="label label-secondary float-end">
                              14
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type=""
                          className="custom-control-input"
                          name="checkbox2"
                          
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            Hostels
                            <span className="label label-secondary float-end">
                              22
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox3"
                          
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            Office Space
                            <span className="label label-secondary float-end">
                              78
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox4"
                          
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            Retail Space
                            <span className="label label-secondary float-end">
                              35
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox5"
                          
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            School Space
                            <span className="label label-secondary float-end">
                              23
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox6"
                          value=""
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            College Space
                            <span className="label label-secondary float-end">
                              14
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          value=""
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            Hostel Buildings
                            <span className="label label-secondary float-end">
                              45
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          value=""
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            Hotels
                            <span className="label label-secondary float-end">
                              34
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          value=""
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            Ware house
                            <span className="label label-secondary float-end">
                              12
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          value=""
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            Industrail
                            <span className="label label-secondary float-end">
                              18
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          value=""
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            Land Or Flots
                            <span className="label label-secondary float-end">
                              02
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          value=""
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            Co-working Space
                            <span className="label label-secondary float-end">
                              25
                            </span>
                          </span>
                        </span>
                      </label>
                      <label className="custom-control form-checkbox mb-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox7"
                          value=""
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            Bacheolors
                            <span className="label label-secondary float-end">
                              26
                            </span>
                          </span>
                        </span>
                      </label>
                    </div>

                    <div className="panel panel-default mb-0 border-top border-bottom p-0">
                      <div className="panel-heading1">
                        <h4 className="panel-title1">
                          <a
                            className="accordion-toggle collapsed"
                            data-bs-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapseone"
                            aria-expanded="false"
                          >
                            Filter
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseone"
                        className="panel-collapse collapse active"
                        role="tabpanel"
                        aria-expanded="false"
                      >
                        <div className="panel-body bg-white ">
                          <div className="">
                            <h6>
                              <label
                                for="price"
                                className="card-title fs-14 text-default  font-weight-semibold2"
                              >
                                Price Range{" "}
                              </label>
                              <input type="text" id="price" />
                            </h6>
                            <div id="mySlider"></div>
                          </div>
                          <div className="">
                            <h3 className="card-title fs-16 font-weight-semibold2 mb-3">
                              Availability
                            </h3>
                            <div className="filter-product-checkboxs flex flex-wrap">
                              <label className="custom-control form-checkbox mb-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name="check1"
                                  value="option1"
                                />
                                <span className="custom-control-label">
                                  Sports
                                </span>
                              </label>
                              <label className="custom-control form-checkbox mb-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name="check1"
                                  value="option2"
                                />
                                <span className="custom-control-label">
                                  Cruise
                                </span>
                              </label>
                              <label className="custom-control form-checkbox mb-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name="check1"
                                  value="option2"
                                />
                                <span className="custom-control-label">
                                  Commute
                                </span>
                              </label>
                              <label className="custom-control form-checkbox mb-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name="check1"
                                  value="option2"
                                />
                                <span className="custom-control-label">
                                  SuperBike
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary btn-block waves-effect waves-light"
                      >
                        Apply Filter
                      </a>
                    </div>
                  </div>
                </Popup>
              </>
            </div>
          </div>
          <div className="sm-display">
            <div className="card-body">
              <div className="" id="container">
                <div className="filter-product-checkboxs">
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox1"
                      value="option1"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        {" "}
                        Residential
                        <span className="label label-secondary float-end">
                          14
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox2"
                      value="option2"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        Hostels
                        <span className="label label-secondary float-end">
                          22
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox3"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        Office Space
                        <span className="label label-secondary float-end">
                          78
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox4"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        Retail Space
                        <span className="label label-secondary float-end">
                          35
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox5"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        School Space
                        <span className="label label-secondary float-end">
                          23
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox6"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        College Space
                        <span className="label label-secondary float-end">
                          14
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox7"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        Hostel Buildings
                        <span className="label label-secondary float-end">
                          45
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox7"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        Hotels
                        <span className="label label-secondary float-end">
                          34
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox7"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        Ware house
                        <span className="label label-secondary float-end">
                          12
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox7"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        Industrail
                        <span className="label label-secondary float-end">
                          18
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox7"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        Land Or Flots
                        <span className="label label-secondary float-end">
                          02
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox7"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        Co-working Space
                        <span className="label label-secondary float-end">
                          25
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="custom-control form-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="checkbox7"
                      value="option3"
                    />
                    <span className="custom-control-label">
                      <span className="text-dark">
                        Bacheolors
                        <span className="label label-secondary float-end">
                          26
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <div className="panel panel-default mb-0 border-top border-bottom p-0">
                <div className="panel-heading1">
                  <h4 className="panel-title1">
                    <a
                      className="accordion-toggle collapsed"
                      data-bs-toggle="collapse"
                      data-parent="#accordion2"
                      href="#collapseone"
                      aria-expanded="false"
                    >
                      Filter
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseone"
                  className="panel-collapse collapse active"
                  role="tabpanel"
                  aria-expanded="false"
                >
                  <div className="panel-body bg-white p-5">
                    <div className="">
                      <h6>
                        <label
                          for="price"
                          className="card-title fs-14 text-default mb-2 font-weight-semibold2"
                        >
                          Price Range{" "}
                        </label>
                        <input type="text" id="price" />
                      </h6>
                      <div id="mySlider"></div>
                    </div>
                    <div className="mt-6">
                      <h3 className="card-title fs-16 font-weight-semibold2 mb-3">
                        Availability
                      </h3>
                      <div className="filter-product-checkboxs">
                        <label className="custom-control form-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="check1"
                            value="option1"
                          />
                          <span className="custom-control-label">Sports</span>
                        </label>
                        <label className="custom-control form-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="check1"
                            value="option2"
                          />
                          <span className="custom-control-label">Cruise</span>
                        </label>
                        <label className="custom-control form-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="check1"
                            value="option2"
                          />
                          <span className="custom-control-label">Commute</span>
                        </label>
                        <label className="custom-control form-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="check1"
                            value="option2"
                          />
                          <span className="custom-control-label">
                            SuperBike
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <a
                href="javascript:void(0);"
                className="btn btn-primary btn-block waves-effect waves-light"
              >
                Apply Filter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar_Loc;