import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import {StoreContext} from "../store"

const SetContext = () => {
    const context =useContext(StoreContext);
    const handleChange = (e) => { 
        

     }


  return (
    <>
      <Form.Label htmlFor="exampleColorInput">Select a color</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#ff0000"
        title="Choose your color"
        onChange={handleChange}
      />
    </>
  );
};

export default SetContext;
