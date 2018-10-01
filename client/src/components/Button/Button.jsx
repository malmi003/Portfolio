import React from "react";
import { Link } from "react-router-dom";

const Button = props => (
    <Link className={"btn btn-lg m-2 home-btns " + props.btnClass} to={props.link} role="button">
        {props.btnName}
    </Link>
);

export default Button;