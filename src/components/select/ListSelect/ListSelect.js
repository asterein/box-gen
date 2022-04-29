import { useState } from "react";
import "./ListSelect.css";

const ListSelect = ({
  label,
  labelSize=1,
  options=[{
    label: "default label",
    value: "default value"
  }],
  value,
  setValue
}) => {
  const [ toggleOptions, setToggleOptions ] = useState(false);

  function toggleOptionDropdown () {
    setToggleOptions(!toggleOptions);
  }

  function getValueLabel (targetValue) {
    for (let index in options) {
      if (targetValue === options[index]?.value) {
        return options[index]?.label;
      }
    }
    return targetValue;
  }

  return (
    <div>
      <span style={{ fontSize: `${labelSize}rem`}}>{label}</span>
      <div className="list-select-container" onClick={toggleOptionDropdown}>
        {toggleOptions
          ? options.map((option, index) => (
            <div className="list-select__option" key={index} onClick={() => setValue(option?.value)}>
              {option?.label}
            </div>
          ))
          : <div className="list-select__option">{getValueLabel(value)}</div>
        }
      </div>
    </div>
  );
}

export default ListSelect;
