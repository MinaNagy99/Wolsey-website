import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { projectContext } from "../../../../context/ProjectsContext";

function SelectIndustry() {
  const { term, setTerm, industryOptions } = useContext(projectContext);

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
      placeholder="Select Indusry"
      onChange={(data) => {
        const value = data.map((d) => d.value);
        setTerm({
          ...term,
          industry: { text: value },
        });
      }}
      options={industryOptions}
      className="basic-multi-select"
      classNames={{
        control: (state) => (state.isFocused ? "red" : "red"),
      }}
      classNamePrefix="select"
    />
  );
}
export default SelectIndustry;
