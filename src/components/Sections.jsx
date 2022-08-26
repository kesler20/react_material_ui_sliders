import React from "react";
import "./InteractivityPanel.css";
import BasicTabs from "./InteractiveToolsNav";
import PropertyTab from "./PropertyTab";

const properties = ["Weight", "height", "wealth"];
const propertyComponents = properties.map((property) => {
  return <PropertyTab property={property} />;
});

const Sections = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="user-interactivity-panel__container" elevation={3}>
        <BasicTabs
          properties={propertyComponents}
          propertyNames={properties}
        />
      </div>
    </div>
  );
};

export default Sections;
