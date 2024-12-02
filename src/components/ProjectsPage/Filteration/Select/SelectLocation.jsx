import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { projectContext } from "../../../../context/ProjectsContext";

function SelectLocation() {
  const { term, setTerm, locationOptions } = useContext(projectContext);

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
      placeholder="Select Location"
      onChange={(data) => {
        const value = data.map((d) => d.value);
        setTerm({
          ...term,
          location: { text: value },
        });
      }}
      options={locationOptions}
      className="basic-multi-select"
      classNames={{
        control: (state) => (state.isFocused ? "red" : "red"),
      }}
      classNamePrefix="select"
    />
  );
}
export default SelectLocation;
