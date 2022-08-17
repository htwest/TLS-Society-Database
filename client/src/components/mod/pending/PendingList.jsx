import React, { useState, useEffect } from "react";

import fetchPending from "../../../hooks/fetchPending";

const PendingList = () => {
  const [pendingList, setPendingList] = useState();

  useEffect(() => {
    fetchPending(setPendingList);
  }, []);

  console.log(pendingList);

  return (
    <div>
      <span>Pending List</span>
    </div>
  );
};

export default PendingList;
