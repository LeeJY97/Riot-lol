import React from "react";

const Rotation = async () => {
  const res = await fetch("http://localhost:3000/api/rotation");

  console.log("res", res);
  return <div>rotation</div>;
};

export default Rotation;
