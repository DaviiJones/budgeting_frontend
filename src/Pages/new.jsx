import React from "react";
import NewTransaction from "../Components/newTransaction";

function New(){
  return (
    <div className="new">
      <h2>Add A New Transaction</h2>
      <NewTransaction />
    </div>
  );
}

export default New;