import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { projectContext } from "../../../../context/ProjectsContext";

function SelectSubIndustry() {
  const { term, setTerm, subIndustriesOptions } = useContext(projectContext);

  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "black" : "black",
        }),
      }}
      isMulti
      name="colors"
      placeholder="Select Sub Industry"
      onChange={(data) => {
        const value = data.map((d) => d.value);
        setTerm({
          ...term,
          subIndustry: { text: value },
        });
      }}
      options={subIndustriesOptions}
      className="basic-multi-select"
      classNames={{
        control: (state) => (state.isFocused ? "red" : "red"),
      }}
      classNamePrefix="select"
    />
  );
}
export default SelectSubIndustry;
