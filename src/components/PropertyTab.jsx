import React from "react";
import CustomizedSlider from "./Slider";
import SelectToolBar from "./SelectToolBar";

const PropertyTab = ({ property }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: '380px',
      }}
    >
      <SelectToolBar />
      <CustomizedSlider name={`Filter Property ${property} above N`} />
      <CustomizedSlider name={`Filter Property ${property} above N`} />
    </div>
  );
};

export default PropertyTab;
