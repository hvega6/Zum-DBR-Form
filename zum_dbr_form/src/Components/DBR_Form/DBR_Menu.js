import React, { useState } from 'react';
import UpdatedTable from './DBR_Data';
import MyTable from './DBR_Jobs';

const ParentComponent = () => {
  // Shared state that will be used by both tables
  const [receiverOrderCode, setReceiverOrderCode] = useState(new Array(10).fill(null));

  // Callback function for when an update is made in MyTable
  const handleUpdate = (index, code) => {
    let updatedCodes = [...receiverOrderCode];
    updatedCodes[index] = code;
    setReceiverOrderCode(updatedCodes);
  };

  return (
    <div>
      <UpdatedTable receiverOrderCode={receiverOrderCode} />
      <MyTable onReceiverOrderUpdate={handleUpdate} receiverOrderCode={receiverOrderCode} />
    </div>
  );
};

export default ParentComponent;