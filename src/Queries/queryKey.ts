const queryKey = {
  rotation: {
    rotationKeys: ["rotationKeys"],
  },
  champ: {
    champsTable: ["champsTable"],
    champ: (id: string) => ["champ", id],
  },
};

export default queryKey;
