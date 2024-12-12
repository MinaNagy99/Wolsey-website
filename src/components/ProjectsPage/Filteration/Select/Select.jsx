import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { projectContext } from "../../../../context/ProjectsContext";

function MultiSelect({ data, placeholder }) {
  const [options, setOptions] = useState([]);
  const { term, setTerm, subIndustriesOptions, industryOptions } =
    useContext(projectContext);

  useEffect(() => {
    if (data == "industry") {
      setOptions(industryOptions);
    } else {
      setOptions(subIndustriesOptions);
    }
  }, [options, term]);

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
      placeholder={placeholder}
      onChange={(data) => {
        const value = data.map((d) => d.value);
        setTerm({
          ...term,
          industry: { text: value },
        });
      }}
      options={options}
      className="basic-multi-select"
      classNames={{
        control: (state) => (state.isFocused ? "red" : "red"),
      }}
      classNamePrefix="select"
    />
  );
}
export default MultiSelect;
