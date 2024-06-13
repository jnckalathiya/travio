import React from "react";
import ProcessSidebar from "./Sidebar/ProcessSidebar";
import { FaAngleRight } from "react-icons/fa6";

const BookingProcessForm = () => {
  return (
    <div className="booking-form-outer">
      <div className="container">
        <div className="row">
          <div class="col-lg-8 col-md-12 col-sm-12 content-side">
            <div className="content-inner">
              <ul class="process-label">
                <li class="current">
                  <span>1.</span>Personal Info
                </li>
                <li>
                  <span>2.</span>Payment Info
                </li>
                <li>
                  <span>3.</span>Confirm
                </li>
              </ul>
              <div className="item-inner">
                <h3>Personal Info</h3>
                <form method="post" class="processing-form">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                      <div class="form-group">
                        <label>First Name</label>
                        <input type="text" name="fname" required="" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lname" required="" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                      <div class="form-group">
                        <label>Address 1</label>
                        <input type="text" name="address1" required="" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                      <div class="form-group">
                        <label>Address 2</label>
                        <input type="text" name="address2" required="" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                      <div class="form-group">
                        <label>City</label>
                        <input type="text" name="city" required="" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                      <div class="form-group">
                        <label>Zip Code</label>
                        <input type="text" name="zip" required="" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                      <div class="form-group">
                        <label>State</label>
                        <input type="text" name="state" required="" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                      <div class="form-group">
                        <label>Country</label>
                        <input type="text" name="country" required="" />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 column">
                      <div class="form-group">
                        <label>Message</label>
                        <textarea name="message"></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 column">
                      <div class="form-group message-btn">
                        <button type="submit" class="button">
                          Next
                          <span>
                            <FaAngleRight />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
            <div className="sidebar-inner">
              <ProcessSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProcessForm;
