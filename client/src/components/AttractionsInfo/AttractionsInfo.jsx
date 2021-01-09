import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../state-management/Store";
import AttractionsBar from "../../components/AttractionsBar/AttractionsBar";

export default function AttractionsInfo() {
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      <AttractionsBar location={state.tripInfo.location} />
    </div>
  );
}
