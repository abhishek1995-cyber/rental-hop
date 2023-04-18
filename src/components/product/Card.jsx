import React, { useEffect, useState } from "react";

function Card(props) {
  const { bikes, activeLocations, setDaySelected } = props;
  const [locationId, setLocationId] = useState("");
  const lowerDaySelected = setDaySelected.toLowerCase();
  console.log(locationId, "bikes")

  var service_found = 0;

  const service_inc =()=>{
   service_found = 1;
}

  const getDetails = (bike) => {
    console.log(bike);
    console.log(locationId);
  };

  
 
  useEffect(()=>{
    var defaultId;
    if(bikes)
    {bikes.map((bike)=>{
      defaultId=bike.price[0].location_id
      setLocationId(defaultId)
    })
  }
    
  }, [bikes])

  return (
    <>
      <div className="col-xl-9 col-lg-8 col-md-12">
        <div className="card">
          <div className="item2-gl ">
            <div className=" item2-gl-nav">
              <div className="sm-bike-filter ">
                <label className="selectgroup-item mb-md-0">
                  <input
                    type="radio"
                    name="value"
                    value="All"
                    className="selectgroup-input"
                    checked=""
                  />
                  <span className="selectgroup-button d-md-flex ">
                    All <i className="fa fa-sort ms-2 mt-1"></i>
                  </span>
                </label>
                <label className="selectgroup-item mb-md-0">
                  <input
                    type="radio"
                    name="value"
                    value="Distance"
                    className="selectgroup-input"
                  />
                  <span className="selectgroup-button">Bikes</span>
                </label>
                <label className="selectgroup-item mb-sm-0">
                  <input
                    type="radio"
                    name="value"
                    value="Latest"
                    className="selectgroup-input"
                  />
                  <span className="selectgroup-button">Scooty</span>
                </label>
                <label className="selectgroup-item mb-0">
                  <input
                    type="radio"
                    name="value"
                    value="Rating"
                    className="selectgroup-input"
                  />
                  <span className="selectgroup-button">Superbikes</span>
                </label>
              </div>

              <div>
                <h6 className="pt-4">Showing 30 entries</h6>
              </div>
            </div>
            <div className="tab-content">
              <div className="row">
                {bikes &&
                  bikes.map((bike) => (
                    <div
                      key={bike.vehicle_id}
                      className="col-lg-12 col-md-12 col-xl-4 "
                    >
                      <div className="card overflow-hidden box-border1 p-1">
                        <div className="power-ribbon power-ribbon-top-left text-warning">
                          <span className="bg-warning">
                            <img
                              src="/assets/images/png/light.png"
                              className=""
                              alt=""
                              width="30px"
                            />
                          </span>
                        </div>
                        <div>
                          <div className="item-card9-imgs">
                            <img
                              src={`http://139.59.81.203/images/${bike.vehicle_image}`}
                              alt="img"
                              className=" pt-4"
                            />
                          </div>
                          <div className="item-tags">
                            <div className="bg-success tag-option">
                              Hotseller
                            </div>
                            <div className="bg-success tag-option">Cruiser</div>
                          </div>
                          <div className="item-card9 mt-1">
                            <h4 className="font-weight-semibold2 mt-2 mb-2 text-center">
                              {bike.vehicle_name}
                            </h4>

                            <div className="mb-1 fs-12">
                              
                              <select
                                
                                value={locationId}         
                                className="w-100 px-3 py-1"
                                onChange={(e) => setLocationId(e.target.value)}
                              >
                                {/* <option value={getLocationId(bike.price[0].location_id)} selected>{bike.price[0].location_name}</option> */}
                                {activeLocations.length === 0
                                  ? bike.price.map((locations) => (
                                    
                                      <option value={locations.location_id} selected>
                                        {locations.location_name}
                                      </option>
                                    ))
                                  : bike.price.map((locations) =>
                                      activeLocations.filter((location) =>
                                        locations.location_name.includes(
                                          location
                                        )
                                      ) ? (
                                        <option value={locations.location_id}>
                                          {locations.location_name}
                                        </option>
                                      ) : (
                                        ""
                                      )
                                    )}
                              </select>
                            </div>
                            {bike.price.map((services) => {
                              if (services.location_id == locationId)
                                return services.service.map((eachService) =>
                                  eachService.day === lowerDaySelected &&
                                  eachService.service_name === "self_pickup" &&
                                  eachService.is_open === 1 ? (
                                    <>
                                      {(service_inc())}
                                      <div className="d-flex flex-wrap  ">
                                        <div className="col-sm-4 center-block box-border pt-1 rounded-left-top">
                                          <div>
                                            <h6 className=" fs-12 book-loc-mul mb-3">
                                              Location Timing{" "}
                                            </h6>
                                            <p className="fs-10 book-theme mb-0">
                                             { eachService.from_time} - {eachService.to_time  }
                                            </p>
                                          </div>
                                        </div>

                                        <div className="col-sm-4 center-block box-border pt-1">
                                          <h6 className=" fs-12 book-loc-mul mb-3">
                                            Security Deposit
                                          </h6>
                                          <p className="fs-10 book-theme">
                                            <i className="fa fa-inr fs-12"></i>
                                            {bike.price.map((advance) => {
                                              if (
                                                advance.location_id ==
                                                locationId
                                              ) {
                                                return advance.advance_amount;
                                              }
                                            })}
                                          </p>
                                        </div>
                                        <div className="col-sm-4 center-block box-border pt-1 rounded-right-top">
                                          <h6 className=" fs-12 book-loc-mul mb-3">
                                            {" "}
                                            Trip
                                            <br />
                                            Limit{" "}
                                          </h6>
                                          <p className="fs-10 book-theme mb-0">
                                            250 KM/day
                                          </p>
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center justify-content-between">
                                        <a className=" p-2 bradius2">
                                          from
                                          <span className="fs-18 ms-1 book-loc-mul font-weight-bold">
                                            <i className="fa fa-inr fs-18"></i>
                                            {bike.price.map((locations) => {
                                              if (
                                                locations.location_id ==
                                                locationId
                                              ) {
                                                return (
                                                  locations.weekday_price + "/ "
                                                );
                                              }
                                            })}
                                          </span>
                                          <span className="fs-10">24 hrs</span>
                                        </a>
                                        <button
                                          onClick={() => getDetails(bike)}
                                          className="btn btn-primary waves-effect waves-light mt-3 margin-left-sm"
                                        >
                                          Details
                                        </button>
                                      </div>
                                    </>
                                  ) : eachService.day === lowerDaySelected &&
                                    eachService.service_name === "go_deliver" &&
                                    eachService.is_open === 1 &&
                                    service_found === 0 ? (
                                    <>
                                      <div className="d-flex flex-wrap  ">
                                        <div className="col-sm-4 center-block box-border pt-1 rounded-left-top">
                                          <div>
                                            <h6 className=" fs-12 book-loc-mul mb-3">
                                              Location Timing{" "}
                                            </h6>
                                            <p className="fs-10 book-theme mb-0">
                                              10AM - 8PM
                                            </p>
                                          </div>
                                        </div>

                                        <div className="col-sm-4 center-block box-border pt-1">
                                          <h6 className=" fs-12 book-loc-mul mb-3">
                                            Security Deposit
                                          </h6>
                                          <p className="fs-10 book-theme">
                                            <i className="fa fa-inr fs-12"></i>
                                            {bike.price.map((advance) => {
                                              if (
                                                advance.location_id ==
                                                locationId
                                              ) {
                                                return advance.advance_amount;
                                              }
                                            })}
                                          </p>
                                        </div>
                                        <div className="col-sm-4 center-block box-border pt-1 rounded-right-top">
                                          <h6 className=" fs-12 book-loc-mul mb-3">
                                            {" "}
                                            Trip
                                            <br />
                                            Limit{" "}
                                          </h6>
                                          <p className="fs-10 book-theme mb-0">
                                            250 KM/day
                                          </p>
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center justify-content-between">
                                        <a className=" p-2 bradius2">
                                          from
                                          <span className="fs-18 ms-1 book-loc-mul font-weight-bold">
                                            <i className="fa fa-inr fs-18"></i>
                                            {bike.price.map((locations) => {
                                              if (
                                                locations.location_id ==
                                                locationId
                                              ) {
                                                return (
                                                  locations.weekday_price + "/ "
                                                );
                                              }
                                            })}
                                          </span>
                                          <span className="fs-10">24 hrs</span>
                                        </a>
                                        <button
                                          onClick={() => getDetails(bike)}
                                          className="btn btn-primary waves-effect waves-light mt-3 margin-left-sm"
                                        >
                                          Details
                                        </button>
                                      </div>
                                    </>
                                  ) : (
                                    ""
                                  )
                                );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
