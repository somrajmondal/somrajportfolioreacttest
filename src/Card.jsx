import React from "react";
import web from "../src/images/homeimage.jpg"
import { NavLink } from "react-router-dom";


const Card = (props) => {
    return (
        <React.Fragment>
            
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top"
                     src={props.imgsrc} alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <NavLink to="" className="btn btn-primary">Go Now</NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card