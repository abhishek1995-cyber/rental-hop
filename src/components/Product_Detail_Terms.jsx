function Product_Detail_Terms() {
  return (
    <>
      <div className="card">
        <h3 className="mt-6 mb-4 fs-18 font-weight-semibold2 ms-3">
          Terms and Conditions{" "}
        </h3>
        <div className="details-accordion mb-5 p-4">
          <div className="accordion" id="accordionExample">
            <div className="card mb-0">
              <a
                href=""
                className="fs-16 font-weight-semibold card-header bg-transparent"
                id="headingOne"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Important Points
              </a>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne1"
                data-parent="#accordionExample"
              >
                <div className="card-body leading-normal-2">
                  <div>
                    <strong>
                      Location Timings: &nbsp;10 AM to 8 PM (Reservations made
                      outside this timing will be reassigned to the closest
                      Location Timing)
                    </strong>
                  </div>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Daily Trip Limit</strong>
                  </p>
                  <ul className="p-3" style={{listStyleType:"circle"}}>
                    <li>
                      100-125cc Vehicle (Local - 150KM/Day |&nbsp;
                      <strong>Outstation: Not Allowed</strong>)
                    </li>
                    <li>
                      150-250cc Vehicle (Local - 200KM/Day | Outstation:
                      200KM/Day)
                    </li>
                    <li>
                      250-500cc Vehicle (Local - 250KM/Day | Outstation:
                      250KM/Day)
                    </li>
                    <li>
                      <strong>
                        <em>Extra KM Charges: Rs. 5/KM</em>
                      </strong>
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Things to Remember</strong>
                  </p>
                  <ul className="p-3" style={{listStyleType:"circle"}}>
                    <li>
                      The minimum age of renting a Bike is
                      <strong>&nbsp;20 Years.</strong>
                    </li>
                    <li>
                      Vehicles are provided with&nbsp;
                      <strong>Empty Tanks</strong> (Enough fuel to reach the
                      nearest Petrol Pump).
                    </li>
                    <li>
                      All&nbsp;<strong>Challans</strong> issued during the trip
                      are to be paid in full by the customer.
                    </li>
                    <li>
                      Negligent, Drunk Driving, Overspeeding (above&nbsp;
                      <strong>80KM/Hr</strong>) will attract a fine of Rs.1000.
                    </li>
                    <li>
                      <strong>General Servicing</strong> (Engine Oil Change,
                      Filter Cleaning, Brake Check) is mandatory after every
                      1500 KM&nbsp;Trip by the customer. This cost must be borne
                      by customer and proper invoice for the servicing is to be
                      furnished on return. Due to non-servicing any issue
                      arising in engine would be paid by customer. Additional
                      fine of Rs. 1000 is applicable in such cases.
                    </li>
                    <li>
                      Only the person who has made the reservation is allowed to
                      drive the vehicle. Any discrepancy would attract a penalty
                      of Rs. 2000.
                    </li>
                    <li>
                      <strong>Accident / Damages&nbsp;</strong>to Vehicle must
                      be paid in full at the time of return. In such cases the
                      exact amount would be estimated by the Service Centre
                      /Location Mechanic.
                    </li>
                    <li>
                      Complete&nbsp;<strong>Engine</strong> warranty is covered
                      by us.
                      <strong>Wear and Tear&nbsp;</strong>(Puncture, Tyre,
                      Brakes, Clutch Plate)&nbsp;and&nbsp;
                      <strong>Electrical Fault</strong> damages will borne by
                      customers.&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card mb-0">
              <a
                href=""
                className="fs-16 font-weight-semibold collapsed card-header bg-transparent"
                id="headingTwo"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Documentation and Security Deposit Policy
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body leading-normal-2">
                  <p>
                    <strong>Documentation</strong> is mandatory for renting out
                    Vehicle from us. In case of failure to produce the same the
                    reservation will be automatically cancelled and no refund
                    would be issued.
                  </p>
                  <ul className="p-3" style={{listStyleType:"circle"}}>
                    <li>
                      <strong>Voter ID / Passport / Aadhaar Card</strong> to be
                      submitted in&nbsp;<strong>Original</strong>. (Fake IDs
                      would be immediately reported to the local Police).
                    </li>
                    <li>
                      <strong>Show and</strong>{" "}
                      <strong>Verify Driving License in Original</strong>{" "}
                      (Physical) or Digilocker App (Screenshot/Photo not
                      allowed). Learner&apos;s License is not acceptable. &nbsp;
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Security Deposit</strong> is to be submitted in full
                    at the time of pickup. This amount is mandatory and no
                    deductions for Delivery / Extension etc. would be made from
                    this. Failure to pay security deposit will lead to
                    cancellation without any refund.&nbsp;
                    <strong>
                      On return Security Deposit will be refunded within 30
                      Mins.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="card mb-0">
              <a
                href=""
                className="fs-16 font-weight-semibold collapsed card-header bg-transparent"
                id="headingTwo"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Cancellation, Rescheduling , Extention Policy
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body leading-normal-2">
                  <p>
                    <strong>Cancellation Scenarios/Fees&nbsp;</strong>is
                    applicable on all reservations. We work on reservation model
                    meaning all vehicles would usually have a prior reservation
                    before and after your pickup/return. Cancellations for below
                    reasons would attract a cancellation fee equal to the
                    Advance Amount paid for the reservation:
                  </p>
                  <ul>
                    <li>
                      Cancelled prior or at time of pickup by the Customer.
                    </li>
                    <li>No show at the time of pickup.</li>
                    <li>No /Partial/Fake Documents.</li>
                    <li>Minimum Driver Age not met.</li>
                    <li>
                      Misusing Technical Glitch/Bug/Coupon on the Website.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      Strictly No Rental Refund would be made after Start of
                      Trip/ Mid Trip Plan Change / Early Return of
                      Vehicle.&nbsp;
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Pickup-Return Date/Time, Vehicle Upgrade-Modification is
                      allowed/not allowed on case-to-case basis. This attracts a
                      fee as informed by the reservation agent.
                    </strong>
                  </p>
                  <p>
                    <strong>
                      <strong>Trip Extension</strong>{" "}
                    </strong>
                    is allowed basis availability for the requested tenure. On
                    confirmation of availability, it is mandatory to pay the
                    rental amount in full as informed by the agent. Trip
                    extension made without payment/our confirmation will lead to
                    a fine of Rs. 100/Hour + Daily Rent (Per Extended Day).
                  </p>
                </div>
              </div>
            </div>
            <div className="card mb-0">
              <a
                href=""
                className="fs-16 font-weight-semibold collapsed card-header bg-transparent"
                id="headingThree"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Platform Policy
              </a>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body leading-normal-2">
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire,that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain. These cases are
                    perfectly simple and easy to distinguish. In a free hour{" "}
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.Nor again is
                    there anyone who loves or pursues or desires to obtain pain
                    of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him
                    some great pleasure. To take a trivial example, which of us
                    ever undertakes laborious physical exercise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="p-3">
          <input type="checkbox" /> I agree to the terms and Conditions
        </h6>
      </div>
    </>
  );
}
export default Product_Detail_Terms;