import React, { useState } from 'react';

const MyTable = () => {
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
  

  // State to handle showing the dropdown
  const [dropdownRowIndex, setDropdownRowIndex] = useState(null);
  // State to store the Receiver Order codes
  const [receiverOrderCode, setReceiverOrderCode] = useState(new Array(numRows).fill(null));

  // Style for cells
  const cellStyle = { border: '1.5px solid black', padding: 10, textAlign: 'center', cursor: 'pointer' };

  const handleSchoolNameClick = rowIndex => {
    setDropdownRowIndex(rowIndex); // Shows the dropdown for the clicked row
  };

  const handleReceiverOrderUpdate = rowIndex => {
    let code = '1234';
    props.onReceiverOrderUpdate(rowIndex, code);
    // Other update logic if necessary...
  };

  // Generate table rows and cells
  const rows = Array.from({ length: numRows }).map((_, rowIndex) => {
    return (
      <tr key={rowIndex}>
        <td style={cellStyle}>{receiverOrderCode[rowIndex] || "-"}</td>
        {Array.from({ length: numColumns }).map((_, columnIndex) => {
          if (columnIndex === 0) { // Only the second column ("School Name")
            return (
              <td key={columnIndex} style={cellStyle} onClick={() => handleSchoolNameClick(rowIndex)}>
  {
    rowIndex === dropdownRowIndex ? (
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', backgroundColor: 'white', border: '1px solid #ddd', zIndex: 100 }}>
          {/* Add additional options here */}
          <div onClick={() => handleReceiverOrderUpdate(rowIndex, 'Deadhead miles')}>DEADHEAD MILES</div>
          {/* Option 1 */}
          <div onClick={() => handleReceiverOrderUpdate(rowIndex, 'Nightingale')}>Nightingale</div>
          {/* Option 2 */}
          <div onClick={() => handleReceiverOrderUpdate(rowIndex, 'S/B ABS')}>S/B ABS</div>
          {/* Add additional options here */}
          <div onClick={() => handleReceiverOrderUpdate(rowIndex, 'S/B School')}>S/B School</div>
          {/* Add additional options here */}
          <div onClick={() => handleReceiverOrderUpdate(rowIndex, 'Nightingale')}>Nightingale</div>

        </div>
      </div>
    ) : "Click for schools"
  }
</td>
            );
          } else {
            return <td key={columnIndex} style={cellStyle}>-</td>;
          }
        })}
      </tr>
    );
  });

  return (
    <table style={{ borderCollapse: 'collapse', marginBottom: 20 }}>
      <thead>
        <tr>
          {tableHeaders.map(header => (
            <th key={header} style={{ ...cellStyle, cursor: 'auto' }}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default MyTable;