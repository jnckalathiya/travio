import React from "react";

const Comments = () => {
  return (
    <>
      <div className="comment-box">
        <div className="text">
          <h3>Leave Your Comments</h3>
          <p>
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex commodo consequat duis aute irure dolor.
          </p>
        </div>

        <form method="post" className="comment-form">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required=""
              />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <input type="text" name="phone" placeholder="Phone" required="" />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <textarea name="message" placeholder="Write Message"></textarea>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <button type="submit" className="button">
                Submit Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comments;
