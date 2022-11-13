import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <>
      <label htmlFor={props.heading}>{props.heading}<span className="optional">{props.optional}</span></label>
      <div className="enclosing_div">
        <input
          autoComplete = {props.autocomplete==="on" ? "on": ""}
          className={props.class}
          onChange={(e) => {
            props.change(e);
          }}
          value={props.val}
          type={props.type}
          id={props.heading}
          name={props.heading}
          placeholder={props.placeholder}
          required
        />
      </div>
    </>
  );
}

export default Input;
