/* eslint-disable react/button-has-type */
import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      {props.loading ? (
        <button
          className={props.class}
          onClick={() => props.ClickFunction()}
          disabled={props.disable}
        >
          <i className="fa fa-circle-o-notch fa-spin"></i>
        </button>
      ) : (
        <button
          className={props.class}
          onClick={() => props.ClickFunction()}
          disabled={props.disable}
        >
          {props.heading}
        </button>
      )}
    </>
  );
}

export default Button;