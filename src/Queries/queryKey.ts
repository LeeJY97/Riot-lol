const queryKey = {
  rotation: {
    rotationKeys: ["rotationKeys"],
  },
  champ: {
    champTable: ["champTable"],
    champ: (id: string) => ["champ", id],
  },
};

export default queryKey;
