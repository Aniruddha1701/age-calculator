import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const App = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [age, setAge] = useState(0);

  const handleYearChange = (date) => {
    setSelectedYear(date);
  };

  const calculateAge = () => {
    if (selectedYear) {
      const currentYear = new Date().getFullYear();
      const enteredYear = selectedYear.getFullYear();

      if (!isNaN(enteredYear) && enteredYear <= currentYear && enteredYear > 0) {
        const age = currentYear - enteredYear;
        setAge(age);
      } else {
        alert("Please enter a valid year.");
      }
    } else {
      alert("Please select a year.");
    }
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <DatePicker
          selected={selectedYear}
          onChange={handleYearChange}
          showYearPicker
          dateFormat="yyyy"
          isClearable // Enable clearing the year selection
        />
        <button onClick={calculateAge}>Calculate</button>
      </div>
      <div className="result">{age > 0 && `Your age is ${age} years.`}</div>
    </div>
  );
};

export default App;
