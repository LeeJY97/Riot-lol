import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ChampDetail = ({ params }: Props) => {
  console.log("params.id", params.id);

  return <div>ChampDetail</div>;
};

export default ChampDetail;
