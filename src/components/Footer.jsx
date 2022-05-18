import React from "react";

export const Footer = (props) => {
  return (
    <>
      <h4>{props.data.h1}</h4>
      <h6>{props.data.hq}</h6>
      <h5>{props.data.h2}</h5>
      <p>{props.data.h3}</p>
    </>
  );
};