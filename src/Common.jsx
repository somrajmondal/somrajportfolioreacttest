import React from "react";
import web from "../src/images/homeimage.jpg";
import "../src/index.css";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <React.Fragment>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Somraj</strong>
                  </h1>
                  <h3 className="my-3">
                    We provide comprehensive services of Content Writing, Blogging, SEO, Web Development, WordPress Sites, and Python Development.
                  </h3>
                  <div className="my-3 text-center">
                    <NavLink to={props.visit}>
                      <button
                        type="button"
                        align="center"
                        className="btn btn-outline-primary btn-lg"
                      >
                        {props.btname}
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-leg-2 header-img">
                  <img src={props.imgsrc} alt="" className="img-fluid animated" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Common;
