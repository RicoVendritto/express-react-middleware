import React from "react";

const Form = props => {
  return (
    <form className="inputForm" onSubmit={e => props.handleSubmit(e)}>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="company"
        name="company"
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="role"
        name="role"
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="sector"
        name="sector"
        onChange={props.handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
