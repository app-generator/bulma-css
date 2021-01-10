import React from "react";

const InputText = () => {
  return (
    <div className="field">
      <label className="label">Label</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
      <p className="help">This is a help text</p>
    </div>
  );
};

export default InputText;
