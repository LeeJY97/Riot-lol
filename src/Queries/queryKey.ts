const queryKey = {
  rotation: {
    rotationKeys: ["rotationKeys"],
  },
  champ: {
    champs: ["champs"],
    champ: (id: string) => ["champ", id],
  },
};

export default queryKey;
