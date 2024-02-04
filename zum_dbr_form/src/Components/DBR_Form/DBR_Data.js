import React from 'react';

const UpdatedTable = () => {
  return (
    <table style={{ width: '100%', border: '1px solid black' }}>
      <tbody>
        {/* First row with 'District Time' spanning 3 columns */}
        <tr>
          <td colSpan={3} style={{ border: '1px solid black', textAlign: 'center' }}>District Time</td>
        </tr>
        {/* Second row with 'TIME STARTED', 'TIME STOPPED' and 'HOURS' */}
        <tr>
          <td style={{ border: '1px solid black', textAlign: 'center' }}>TIME STARTED</td>
          <td style={{ border: '1px solid black', textAlign: 'center' }}>TIME STOPPED</td>
          <td style={{ border: '1px solid black', textAlign: 'center' }}>HOURS</td>
        </tr>
        {/* Third empty row */}
        <tr>
          <td style={{ border: '1px solid black' }}></td>
          <td style={{ border: '1px solid black' }}></td>
          <td style={{ border: '1px solid black' }}></td>
        </tr>
        {/* Fourth empty row */}
        <tr>
          <td style={{ border: '1px solid black' }}></td>
          <td style={{ border: '1px solid black' }}></td>
          <td style={{ border: '1px solid black' }}></td>
        </tr>
        {/* Last row with 'Total hours' in the last cell */}
        <tr>
          <td style={{border: '1px solid black' }}></td>
          <td style={{ border: '1px solid black' }}></td>
          <td style={{ border: '1px solid black', textAlign: 'center' }}>Total hours</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UpdatedTable;