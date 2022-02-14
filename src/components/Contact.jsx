import React from "react";

function Contact() {
  return (
    <>
      <div className="mt-4">
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="col-12">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select className="form-select">
              <option>Gujarat</option>
              <option>Maharastra</option>
              <option>Kolkata</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
