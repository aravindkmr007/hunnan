import React, { lazy, useState } from "react";
import StepZilla from "react-stepzilla";
import "./StepsZilla.css";
const CustomerSurvey = lazy(() => import("../CustomerSurvey/CustomerSurvey"));

function StepsZilla() {
  const [intialState, setintialState] = useState({
    
  }
  );
  const Pages = [
    {
      name: "Product Rating",
      component: (
        <CustomerSurvey
          intialState={intialState}
          setintialState={setintialState}
          question={"How satisfied are you with our products?"}
          rating={5}
          textbox={false}
          name="ProductRating"
          
        />
      ),
    },
    {
      name: "Price Comparsion to Retails",
      component: (
        <CustomerSurvey
          question={"How fair are the prices compared to similar retailers?"}
          rating={5}
          name="PriceCompareRating"
          textbox={false}
          intialState={intialState}
          setintialState={setintialState}
        />
      ),
    },
    {
      name: "Price Rating",
      component: (
        <CustomerSurvey
          question={
            "How satisfied are you with the value for money of your purchase?"
          }
          rating={5}
          name="PriceRating"
          textbox={false}
          intialState={intialState}
          setintialState={setintialState}
        />
      ),
    },
    {
      name: "Recommandation ",
      component: (
        <CustomerSurvey
          question={
            "On a scale of 1-10 how would you recommend us to your friends and family?"
          }
          name="RecommandationRating"
          rating={10}
          textbox={false}
          intialState={intialState}
          setintialState={setintialState}
        />
      ),
    },
    {
      name: "Feedback ",
      component: (
        <CustomerSurvey
        intialState={intialState}
        setintialState={setintialState}
          question={"What could we do to improve our service?"}
          name="Feedback"
          textbox={true}
        />
      ),
    },
  ];
  console.log(intialState);
  return (
    <div className="step-progress">
      <StepZilla steps={Pages} />
    </div>
  );
}

export default StepsZilla;
