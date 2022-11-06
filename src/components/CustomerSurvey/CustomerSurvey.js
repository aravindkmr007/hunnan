import React, { useState } from "react";
import StepZilla from "react-stepzilla";
import Rating from "@material-ui/lab/Rating";
import "./CustomerSurvey.css";
import { TextField } from "@material-ui/core";
// question, rating, textbox,name,intialState,setintialState
function CustomerSurvey({ question, rating, textbox,name,intialState,setintialState}) {
  // console.log(props,"aravind")

  return (
    <div>
      {textbox ? (
        <div className="content">
          <h5>{question}</h5>
          <TextField
            id="standard-multiline-flexible"
            multiline
            maxRows={10}
            name={name}
            value={intialState[name] ? intialState[name] : ""}
            onChange={(e) => {
              setintialState({
                ...intialState,
                [[name]] : e.target.value
              })
            }}
          />
        </div>
      ) : (
        <div className="content">
          <h5>{question}</h5>
          <Rating
            style={{ maxWidth: "10%" }}
            name="simple-controlled"
            max={rating}
              value={intialState[name] ? intialState[name] : ""}
            defaultValue={0}
            onChange={(event, newValue) => {
              setintialState({
                ...intialState,
                [[name]] : newValue
              })
            }}
          />
        </div>
      )}
    </div>
  );
}

export default CustomerSurvey;
