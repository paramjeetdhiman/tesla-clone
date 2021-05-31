import React from "react";
import { Section } from "./Section";

export const Home = () => {
  return (
    <div>
      <Section
        title="Model S"
        description="Order online for Touchless Delivery"
        bgImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order online for Touchless Delivery"
        bgImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order online for Touchless Delivery"
        bgImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order online for Touchless Delivery"
        bgImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
    </div>
  );
};
