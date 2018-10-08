import React from "react";
// import { Link } from "react-router-dom";
import "./TimecardHorizontal.css";

const TimecardHorizontal = props => {
    return (
        <div class="col-sm-6 col-md-4 col-lg-3 timeline">
            <div class="timeline-inner">
                <div class="year">{props.time}</div>
                <div class="timeline-content">
                    <div class="post">{props.title}</div>
                    <img src={props.imageSrc} alt={props.imageAlt} />
                </div>
                <div class="timeline-icon">
                    <i class={"fa " + props.icon}></i>
                </div>
            </div>
        </div>
    )
};
export default TimecardHorizontal;