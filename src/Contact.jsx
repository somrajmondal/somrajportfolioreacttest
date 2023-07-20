import React, { useState } from "react";
import Footer from "./Footer";


const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Hi ${data.fullname}, your form has been submitted`);
  };

  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">Contact Team</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Somraj Mondal"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="1234567890"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="abcd@gmail.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Write your query here"
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-outline-primary" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Contact;
