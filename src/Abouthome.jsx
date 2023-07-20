import React from 'react';
import somraj from "../src/images/somraj.jpeg";

const Aboutsomraj = () => {
  return (
    <React.Fragment>
      <div className='p-4' > 
      <h2 className="text-center">
        <strong  className='p-5'> About Somraj Mondal</strong>
      </h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-2 order-1 d-flex justify-content-end">
          <img src={somraj} alt="" className="img-fluid animated" />
        </div>
        <div className="col-md-6 order-2 d-flex justify-content-center flex-column">
          <h4 className="my-3">
            We provide comprehensive services of Content Writing, Blogging, SEO, Web Development, WordPress Sites, and Python Development.
          </h4>
        </div>
      </div>
      </div>
      
    </React.Fragment>
  );
};

export default Aboutsomraj;
