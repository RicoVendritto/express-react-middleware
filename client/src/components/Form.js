import React from "react";

const Form = props => {
  return (
    <form className="inputForm" onSubmit={e => props.handleSubmit(e)}>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={props.handleChange}
        required
      />
      <input
        type="text"
        placeholder="company"
        name="company"
        onChange={props.handleChange}
        rquired
      />
      <input
        type="text"
        placeholder="role"
        name="role"
        onChange={props.handleChange}
        required
      />
      <input
        type="text"
        placeholder="sector"
        name="sector"
        onChange={props.handleChange}
        required
      />
      <input type="submit" value="Submit" className="submit" />
      <svg
        className="svgCard"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000"
          d="M0,224L288,192L576,320L864,96L1152,0L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg>
    </form>
  );
};

export default Form;
