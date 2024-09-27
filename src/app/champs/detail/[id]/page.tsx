import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ChampDetail = async ({ params }: Props) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_DDRAGON_BASE_URL}/14.19.1/data/ko_KR/champion/${id}.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const data = res.json();

  return <div>{params.id}</div>;
};

export default ChampDetail;
