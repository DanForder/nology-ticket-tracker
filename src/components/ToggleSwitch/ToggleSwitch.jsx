import React from "react";

import "./ToggleSwitch.scss";

const ToggleSwitch = ({ handleToggle }) => {
  return (
    <label className="toggle-switch">
      <input className="toggle-switch__checkbox" type="checkbox"  onClick={handleToggle} />
      <span className="toggle-switch__slider"></span>
    </label>
  );
};

export default ToggleSwitch;
