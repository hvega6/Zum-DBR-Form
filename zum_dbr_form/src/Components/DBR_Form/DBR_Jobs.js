import React, { useState } from 'react';

const MyTable = (props) => {
  const numColumns = 9;
  const numRows = 8;
  const tableHeaders = [
    "Receiver Order",
    "School Name",
    "Start Time",
    "Stop Time",
    "Total Amt.",
    "Pupils",
    "Miles",
    "Absorb/Cover",
    "Dispatch#",
    "Cor"
  ];
  
   // Stores start and stop times for each row
   const [times, setTimes] = useState(Array.from({ length: numRows }, () => ({
    startTime: '', // For third column
    stopTime: ''  // For fourth column
  })));

  // State to handle showing the dropdown
  const [dropdownRowIndex, setDropdownRowIndex] = useState(null);
  // State to store the Receiver Order codes
  const [receiverOrderCode, setReceiverOrderCode] = useState(new Array(numRows).fill(null));

  // Style for cells
  const cellStyle = { border: '1.5px solid black', padding: 10, textAlign: 'center', cursor: 'pointer' };

  const handleSchoolNameClick = rowIndex => {
    setDropdownRowIndex(rowIndex); // Shows the dropdown for the clicked row
  };

  // State initialization and other unchanged code...
 // State to manage school names for each row
 const [schoolNames, setSchoolNames] = useState(Array(numRows).fill(''));

 // Sample school options data
 const schoolOptions = [
   { id: 'school1', name: 'School One' },
   { id: 'school2', name: 'School Two' },
   // ... other school options
 ];

  const handleReceiverOrderUpdate = (rowIndex, code) => {
    let updatedCodes = [...receiverOrderCode];
    updatedCodes[rowIndex] = code;
    setReceiverOrderCode(updatedCodes);
    props.onReceiverOrderUpdate(rowIndex, code);
    // Other update logic if necessary...
  };

  // Function to handle state update based on time changes
  // This function should be provided in your code base.
  const handleTimeChange = (rowIndex, key, value) => {
    let newTimes = [...times];
    newTimes[rowIndex][key] = value;
    setTimes(newTimes);
  };

  // A placeholder for the duration calculation function
  const calculateDuration = (startTime, stopTime) => {
    // Placeholder logic to calculate the duration between start and stop time
    return '-';
  };

  // Generate cells with dropdown for school names and time inputs
  const generateCell = (rowIndex, columnIndex) => {
    let cellContent;
    switch(columnIndex) {
      // ... other cases ...

      case 1: // School Name dropdown
        cellContent = (
          <select
            value={schoolNames[rowIndex]}
            onChange={(e) => handleSchoolNameChange(rowIndex, e.target.value)}
            style={{ border: 'none' }}
          >
            <option value="">Select School</option>
            {schoolOptions.map(school => (
              <option key={school.id} value={school.id}>{school.name}</option>
            ))}
          </select>
        );
        break;

      case 2: // Start Time picker
      case 3: // Stop Time picker
        const timeKey = columnIndex === 2 ? 'startTime' : 'stopTime';
        cellContent = (
          <input
            type="time"
            value={times[rowIndex][timeKey]}
            onChange={(e) => handleTimeChange(rowIndex, timeKey, e.target.value)}
            style={{ border: 'none' }}
          />
        );
        break;

      // ... other cases ...
    }

    return <td key={`row-${rowIndex}-col-${columnIndex}`} style={cellStyle}>{cellContent}</td>;
  };

  // ... tableRows constant and return statement ...

};

export default MyTable;