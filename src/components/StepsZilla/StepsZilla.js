import React, { lazy, useState } from "react";
import StepZilla from "react-stepzilla";
import "./StepsZilla.css";
const CustomerSurvey = lazy(() => import("../CustomerSurvey/CustomerSurvey"));

function StepsZilla() {
  const [intialState, setintialState] = useState({
    
  }
  );
   let Data = [
    {
      name: "Product Rating",
      question: "How satisfied are you with our products?",
      maxrating: 5,
      textbox: false,
    },
    {
      name: "Price Comparsion to Retails",
      question: "How fair are the prices compared to similar retailers?",
      maxrating: 5,
      textbox: false,
    },
    {
      name: "Price Rating",
      question:
        "How satisfied are you with the value for money of your purchase?",
      maxrating: 5,
      textbox: false,
    },
    {
      name: "Recommandation",
      question:
        "On a scale of 1-10 how would you recommend us to your friends and family?",
      maxrating: 10,
      textbox: false,
    },
    {
      name: "Feedback",
      question: "What could we do to improve our service?",
      maxrating : "",
      textbox: true,
    },
  ];
 const Pages = Data.map((e) => {
    return {
      name: e.name,
      component: (
        <CustomerSurvey
          intialState={intialState}
          setintialState={setintialState}
          question={e.question}
          rating={e.maxrating}
          textbox={e.textbox}
          name={e.name.trim()}
        />
      ),
    };
  });
  console.log(intialState);
  return (
    <div className="step-progress">
      <StepZilla steps={Pages} />
    </div>
  );
}

export default StepsZilla;
