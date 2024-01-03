import React from "react";

type Props = {
  title?: string;
};

const CommonSwitchToggler = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-x-2">
      <label>
        <input className="toggle-checkbox" type="checkbox" />
        <div className="toggle-slot">
          <div className="toggle-button"></div>
        </div>
      </label>
      <p className="text-sm font-medium text-gray-700">{title}</p>
    </div>
  );
};

export default CommonSwitchToggler;
