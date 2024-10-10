import React from "react";

const DateFilter = ({ minDate, maxDate, handleMinDateChange, handleMaxDateChange }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <label>Min Birthdate: </label>
      <input
        type="date"
        value={minDate}
        onChange={(e) => handleMinDateChange(e.target.value)}
      />

      <label style={{ marginLeft: "20px" }}>Max Birthdate: </label>
      <input
        type="date"
        value={maxDate}
        onChange={(e) => handleMaxDateChange(e.target.value)}
      />
    </div>
  );
};

export default DateFilter;
