import React from "react";
import WhenLeft from "../../components/Campaign/When/WhenBasic/WhenLeft";
import WhenRight from "../../components/Campaign/When/WhenBasic/WhenRight";

function When() {
  return (
    <div className="flex gap-5">
      <WhenLeft />
      <WhenRight />
    </div>
  );
}

export default When;
