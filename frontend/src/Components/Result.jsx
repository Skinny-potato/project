import React, { useContext } from "react";
import { DataContext } from "../Assets/TextUpload";

const Result = () => {
  const data = useContext(DataContext);

  return (
    <>
      {data && <div>{data}</div>}
      {!data && <div>No data available</div>}
    </>
  );
};

export default Result;
